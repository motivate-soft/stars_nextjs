import Modal from "@iso/components/Feedback/Modal";

import React, { useState } from "react";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import { Button } from "antd";
import DropzoneWrapper from "../Dropzone/Dropzone.styles";
import Dropzone from "../Dropzone/Dropzone";
import { Row, Col } from "antd";
import classNames from "classnames";
import GalleryWrapper from "../Gallery/Gallery.styles";
import CropImage from "@components/Admin/Property/FeaturedImage/CropImage";
import { IoIosCrop, IoIosTrash } from "react-icons/io";
import mediaApi from "./../../../../service/mediaApi";
import { notification } from "@iso/components";
import styled from "styled-components";

const AdminGalleryImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  background-image: ${(props) => props.imageUrl};
  background-color: #f2f2f3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .action-buttons {
    position: absolute;
    top: 0;
    right: 0;
    svg {
      margin-right: 20px;
      width: 20px;
      height: 20px;
    }
  }
`;

export default function FeaturedImage(props) {
  const { items, selectedItem, onUploadSuccess, onSelectImage } = props;

  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  async function handleDeleteImage(imageId) {
    try {
      let res = await mediaApi.delete(imageId);
      notification("success", "file deleted successfully!");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ marginTop: 20 }}>
        {selectedItem ? "Change Featured Image" : "Attach Featured Image"}
      </Button>
      <Modal
        visible={visible}
        className="media-modal"
        title="Media"
        onCancel={handleCancel}
        onOk={handleCancel}
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
                    <AdminGalleryImageWrapper imageUrl={item.file}>
                      <div className="action-buttons">
                        <CropImage
                          imageTitle={item.title}
                          imagePath={item.file}
                          onUploadSuccess={onUploadSuccess}
                        />
                        <IoIosTrash
                          onClick={(e) => handleDeleteImage(item.id)}
                        />
                      </div>
                    </AdminGalleryImageWrapper>
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
