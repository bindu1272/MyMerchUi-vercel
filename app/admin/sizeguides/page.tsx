"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useRouter } from "next/navigation";
import { notification, Spin } from "antd";
import {
  fetchEnquiryProductSizeGuidesRequest,
  importEnquiryProductSizeGuidesRequest,
} from "@/actions/enquiryProductActions";
import SizeGuidesTable from "@/components/Admin/SizeGuidesTable";
import Navigator from "@/components/Admin/Navigator";
import { getUser } from "@/selectors/authSelector";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const SizeGuides = ({
  user,
}:any) => {
  const history = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [sizeGuides, setSizeGuides] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sizeGuidesPerPage, setSizeGuidesPerPage] = useState(10);
  const [sizeGuidesZipFile, setSizeGuidesZipFile]:any = useState(null);
  const [showSizeGuidesZipFileBrowseModal, setShowSizeGuidesZipFileBrowseModal] = useState(false);

  useEffect(() => {
    trackPageViewInGoogle();
  }, [])

  useEffect(() => {
    if (!user || !user.roles.includes("Admin")) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(
      fetchEnquiryProductSizeGuidesRequest(
        {
          searchString: searchString,
        },
        (response:any) => {
          setSizeGuides(response);
          setLoading(false);
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while fetching size guides.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  }, []);

  const handleSearch = () => {
    setLoading(true);
    dispatch(
      fetchEnquiryProductSizeGuidesRequest(
        {
          searchString: setSearchString,
        },
        (response:any) => {
          setSizeGuides(response);
          setCurrentPage(1);
          setLoading(false);
        },
        (error:any) => {
          setLoading(false);
          notification.error({
            message: "Error occurred while searching size guides.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  };

  const handleTableChange = (page:any) => {
    setCurrentPage(page.current);
    setSizeGuidesPerPage(page.pageSize);
  };

  const onSelectSizeGuidesZipFile = (value:any) => {
    setSizeGuidesZipFile(value);
  };

  const onSizeGuidesZipFileUpload = () => {
    const formData = new FormData();
    formData.append("zip_file", sizeGuidesZipFile);
    setLoading(true);
    dispatch(
      importEnquiryProductSizeGuidesRequest(
        formData,
        () => {
          setShowSizeGuidesZipFileBrowseModal(false)
          setLoading(false);
          notification.success({
            message: "Size guides imported successfully.",
            placement: "bottomRight",
            // bottom: 400,
          });
        },
        () => {
          setLoading(false);
          setShowSizeGuidesZipFileBrowseModal(false);
          notification.error({
            message: "Error occurred while importing size guides.",
            placement: "bottomRight",
            // bottom: 400,
          });
        }
      )
    );
  };


  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          <GoogleSetup
            title={"Admin - SizeGuides"}
            description={""}
          />
          <Navigator active={"sizeguides"} />
          <SizeGuidesTable
            sizeGuides={sizeGuides}
            pagination={{
              current: currentPage,
              pageSize: sizeGuidesPerPage,
              total: sizeGuides.length,
            }}
            searchString={searchString}
            showSizeGuidesZipFileBrowseModal={showSizeGuidesZipFileBrowseModal}
            setShowSizeGuidesZipFileBrowseModal={setShowSizeGuidesZipFileBrowseModal}
            setSearchString={setSearchString}
            handleTableChange={handleTableChange}
            handleSizeGuidesSearch={handleSearch}
            onSelectSizeGuidesZipFile={onSelectSizeGuidesZipFile}
            onSizeGuidesZipFileUpload={onSizeGuidesZipFileUpload}
          />
        </>
      )}
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    user: getUser(state),
  };
}

export default connect(mapStateToProps, {})(SizeGuides);
