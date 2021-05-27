import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Modal from "@iso/components/Feedback/Modal";
import InfiniteGallery from "@components/Admin/Gallery/InfiniteGallery/InfiniteGallery";
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
        <Row>
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
      </Modal>
    </div>
  );
}
