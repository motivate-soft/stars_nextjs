import Modal from "@iso/components/Feedback/Modal";

import React, { useState } from "react";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import { Button, Row, Col } from "antd";
import GalleryMedia from "../../Gallery/GalleryImage/GalleryMedia";
import DropzoneUploader from "@components/Admin/Dropzone/DropzoneUploader";
import styled from "styled-components";
import { palette } from "styled-theme";

const GalleryWrapper = styled.div`
  height: 60vh;
  overflow-y: scroll;

  .ant-col {
    padding: 15px;
  }

  .gallery-item {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);

    &.active {
      border: 5px solid ${palette("primary", 0)};
    }

    p {
      font-size: 0.75rem;
      text-align: center;
      padding: 0.5rem !important;
      margin: 0 !important;
    }
  }

  .item-active {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default function FeaturedImageManager(props) {
  const {
    items,
    selectedItem,
    propertyId,
    onUploadSuccess,
    onDeleteSucess,
    onSelect,
  } = props;

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
            <DropzoneUploader onUploadSuccess={onUploadSuccess} />
          </TabPane>
          <TabPane tab="Images" key="featured">
            <GalleryWrapper>
              <Row>
                {items.map((item, index) => (
                  <Col key={index} xl={4} lg={6} sm={12}>
                    <GalleryMedia
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
