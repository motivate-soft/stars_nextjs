import React from "react";
import { Button, Modal } from "antd";
import PropertyImageGallery from "@components/Guest/Property/ImageGallery/ImageGallery";

export default function PropertyGalleryModal({
  isModalShowing,
  setIsModalShowing,
  images,
}) {
  return (
    <Modal
      visible={isModalShowing}
      onCancel={() => setIsModalShowing(false)}
      footer={null}
      width="100%"
      maskStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
      }}
      wrapClassName="image_gallery_modal"
      closable={false}
    >
      <>
        <PropertyImageGallery
          images={images.sort((a, b) => a.order > b.order)}
        />
        <Button
          onClick={() => setIsModalShowing(false)}
          className="image_gallery_close"
        >
          <svg width="16.004" height="16" viewBox="0 0 16.004 16">
            <path
              id="_ionicons_svg_ios-close_2_"
              d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
              transform="translate(-160.5 -160.55)"
              fill="#909090"
            />
          </svg>
        </Button>
      </>
    </Modal>
  );
}
