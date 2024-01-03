import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { connect, useDispatch } from "react-redux";
import { Spin, notification } from "antd";
import {
  fetchEnquiryProductsRequest,
  importEnquiryProductsRequest,
} from "../../actions/enquiryProductActions";
import ProductsTable from "./ProductsTable";
import { getUser } from "../../selectors/authSelector";

const Products = ({
  user,
}) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [productsZipFile, setProductsZipFile] = useState(null);
  const [showProductsZipFileBrowseModal, setShowProductsZipFileBrowseModal] = useState(false);

  useEffect(() => {
    if (!user || !user.roles.includes("Admin")) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(
      fetchEnquiryProductsRequest(
        {
          searchString: searchString,
        },
        (response) => {
          let productsArray = [];
          for (const category of Object.keys(response)) {
            for (const p of response[category]) {
              productsArray.push(p);
            }
          }
          setProducts(productsArray);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching products.",
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  }, []);

  const handleSearch = () => {
    setLoading(true);
    dispatch(
      fetchEnquiryProductsRequest(
        {
          searchString: setSearchString,
        },
        (response) => {
          let productsArray = [];
          for (const category of Object.keys(response)) {
            for (const p of response[category]) {
              productsArray.push(p);
            }
          }
          setProducts(productsArray);
          setCurrentPage(1);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while searching products.",
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  };

  const handleTableChange = (page) => {
    setCurrentPage(page.current);
    setProductsPerPage(page.pageSize);
  };

  const onSelectProductsZipFile = (value) => {
    setProductsZipFile(value);
  };

  const onProductsZipFileUpload = () => {
    const formData = new FormData();
    formData.append("zip_file", productsZipFile);
    setLoading(true);
    dispatch(
      importEnquiryProductsRequest(
        formData,
        () => {
          setShowProductsZipFileBrowseModal(false)
          setLoading(false);
          notification.success({
            message: "Products imported successfully.",
            placement: "bottomRight",
            bottom: 400,
          });
        },
        () => {
          setLoading(false);
          setShowProductsZipFileBrowseModal(false);
          notification.error({
            message: "Error occurred while importing products.",
            placement: "bottomRight",
            bottom: 400,
          });
        }
      )
    );
  };

  return loading ? (
    <Spin />
  ) : (
    <ProductsTable
      products={products}
      pagination={{
        current: currentPage,
        pageSize: productsPerPage,
        total: products.length,
      }}
      searchString={searchString}
      showProductsZipFileBrowseModal={showProductsZipFileBrowseModal}
      setShowProductsZipFileBrowseModal={setShowProductsZipFileBrowseModal}
      setSearchString={setSearchString}
      handleTableChange={handleTableChange}
      handleProductsSearch={handleSearch}
      onSelectProductsZipFile={onSelectProductsZipFile}
      onProductsZipFileUpload={onProductsZipFileUpload}
    />
  );
};

function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

export default connect(mapStateToProps, {
})(Products);
