import Modal from "@iso/components/Feedback/Modal";

import React, { useState } from "react";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import DropzoneWrapper from "../Dropzone/Dropzone.styles";
import Dropzone from "../Dropzone/Dropzone";
import { Button, Row, Col } from "antd";
import GalleryWrapper from "../Gallery/Gallery.styles";
import AdminGalleryImage from "../AdminGalleryImage/AdminGalleryImage";

export default function FeaturedImage(props) {
  const {
    items,
    selectedItem,
    propertyId,
    onUploadSuccess,
    onDeleteSucess,
    onSelect,
  } = props;

  console.log("selectedItem", selectedItem);

  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ marginTop: 20 }}>
        {selectedItem ? "Change Featured Image" : "Select Featured Image"}
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
            <DropzoneWrapper>
              <Dropzone onUploadSuccess={onUploadSuccess} />
            </DropzoneWrapper>
          </TabPane>
          <TabPane tab="Images" key="featured">
            <GalleryWrapper>
              <Row>
                {items.map((item, index) => (
                  <Col key={index} lg={4} sm={6}>
                    <AdminGalleryImage
                      showSelectButton
                      propertyId={propertyId}
                      selected={
                        selectedItem && item.id === parseInt(selectedItem.id)
                      }
                      image={item}
                      onSelect={onSelect}
                      onUploadSuccess={onUploadSuccess}
                      onDeleteSucess={onDeleteSucess}
                    />
                  </Col>
                ))}
              </Row>
            </GalleryWrapper>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}
