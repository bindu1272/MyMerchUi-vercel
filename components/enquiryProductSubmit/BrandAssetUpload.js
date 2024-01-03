import { useState } from "react";
import { Modal, Upload, Button, message } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const BrandAssetUpload = ({
  fileList,
  brandAssetUploadInProgress,
  onUploadFile,
  onDeleteFile,
}) => {
  const [showFilePreview, setShowFilePreview] = useState(false);
  const [filePreviewImage, setFilePreviewImage] = useState("");
  const [filePreviewTitle, setFilePreviewTitle] = useState("");

  const onCancelFilePreview = () => {
    setShowFilePreview(false);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onPreviewFile = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setFilePreviewImage(file.url || file.preview);
    setFilePreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
    setShowFilePreview(true);
  };

  const props = {
    name: "file",
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <div className="upload_info">
       
        <Dragger
          {...props}
          fileList={fileList}
          customRequest={onUploadFile}
          onRemove={onDeleteFile}
          onPreview={onPreviewFile}
          className="dd_block"
        >
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined />
          </p>
          <p>
            Drag and drop to upload or <span>choose file here</span>
          </p>
          <label>(Max. file size 5mb)</label>
        </Dragger>
        <Upload
          listType="picture-card"
          fileList={fileList}
          customRequest={onUploadFile}
          onRemove={onDeleteFile}
          onPreview={onPreviewFile}         
        >
          {/* <Button>+ Add</Button> */}
        </Upload>
      </div>
      <Modal
        visible={showFilePreview}
        title={filePreviewTitle}
        footer={null}
        onCancel={onCancelFilePreview}
      >
        <img
          alt="File Preview"
          style={{
            width: "100%",
          }}
          src={filePreviewImage}
        />
      </Modal>
    </>
  );
};

export default BrandAssetUpload;
