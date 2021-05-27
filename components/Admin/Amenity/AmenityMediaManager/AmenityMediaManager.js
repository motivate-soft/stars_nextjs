import React, { useState } from "react";
import { Button, Modal } from "antd";
import InfiniteGallery from "@components/Admin/Gallery/InfiniteGallery/InfiniteGallery";

export default function AmenityMediaManager(props) {
  const { image, onSelectImage } = props;

  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Button type="primary" onClick={showModal} style={{ marginTop: 20 }}>
        {image ? "Change" : "Attach"} Featured Image
      </Button>
      <Modal
        visible={visible}
        className="media-modal"
        title="Media"
        onCancel={handleCancel}
        footer={[]}
      >
        <InfiniteGallery selectedItem={image} onSelectImage={onSelectImage} />
      </Modal>
    </div>
  );
}
