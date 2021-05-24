import React, { useState } from "react";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import { Button, Col, Row } from "antd";
import Modal from "@iso/components/Feedback/Modal";
import InfiniteGallery from "@components/Admin/Gallery/InfiniteGallery/InfiniteGallery";
import DropzoneUploader from "@components/Admin/Dropzone/DropzoneUploader";
import MetaMediaDetail from "./MetaMediaDetail";

export default function MetaMediaManager(props) {
  const [image, setImage] = useState(null);

  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  function handleSelectImage(image) {
    setImage(image);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Button type="primary" onClick={showModal} style={{ marginTop: 20 }}>
        Media
      </Button>
      <Modal
        visible={visible}
        className="media-modal"
        title="Media"
        onCancel={handleCancel}
        footer={[]}
      >
        <Tabs
          defaultActiveKey="1"
          style={{ margin: "0 20px", background: "#fff", padding: 20 }}
        >
          <TabPane tab="Upload" key="upload">
            <DropzoneUploader onUploadSuccess={() => {}} />
          </TabPane>
          <TabPane tab="Images" key="featured">
            <Row gutter={32}>
              <Col lg={20}>
                <InfiniteGallery
                  selectedItem={image}
                  onSelectImage={handleSelectImage}
                />
              </Col>
              <Col lg={4}>
                <MetaMediaDetail imageId={image ? image.id : null} />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}
