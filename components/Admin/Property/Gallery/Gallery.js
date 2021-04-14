import Modal from "@iso/components/Feedback/Modal";

import React, { useState } from "react";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import { Button } from "antd";
import GalleryWrapper from "./Gallery.styles";
import DropzoneWrapper from "../Dropzone/Dropzone.styles";
import Dropzone from "../Dropzone/Dropzone";
import SortableMediaGallery from "./SortableMediaGallery";

export default function Gallery(props) {
  const { items, onSortEnd, onUploadSuccess } = props;

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
        {items?.length >0 ? "Edit Gallery": "Attach Gallery"}
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
          <TabPane tab="Gallery" key="gallery">
            <GalleryWrapper>
              <SortableMediaGallery items={items} onSortEnd={onSortEnd} />
            </GalleryWrapper>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}
