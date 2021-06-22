import Modal from "@iso/components/Feedback/Modal";

import React, { useState } from "react";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import { Button } from "antd";
import DropzoneUploader from "@components/Admin/Dropzone/DropzoneUploader";
import SortableMediaGallery from "./SortableMediaGallery";
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

export default function GalleryManager(props) {
  const {
    propertyId,
    items,
    onSortEnd,
    onUploadSuccess,
    onDeleteSucess,
  } = props;
  console.log("GalleryManager->items", items);

  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {items?.length > 0 ? "Edit Gallery" : "Attach Gallery"}
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
            <DropzoneUploader
              propertyId={propertyId}
              onUploadSuccess={onUploadSuccess}
            />
          </TabPane>
          <TabPane tab="GalleryManager" key="gallery">
            <GalleryWrapper>
              <SortableMediaGallery
                propertyId={propertyId}
                items={items}
                onSortEnd={onSortEnd}
                onUploadSuccess={onUploadSuccess}
                onDeleteSucess={onDeleteSucess}
              />
            </GalleryWrapper>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}
