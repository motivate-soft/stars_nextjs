import Modal from "@iso/components/Feedback/Modal";

import React, {useState} from "react";
import Tabs, {TabPane} from "@iso/components/uielements/tabs";
import {Button} from "antd";
import DropzoneWrapper from "../Dropzone/Dropzone.styles";
import Dropzone from "../Dropzone/Dropzone";
import {Row, Col} from "antd";
import classNames from "classnames";
import GalleryWrapper from "../Gallery/Gallery.styles";
import CropImage from "@components/Admin/Property/FeaturedImage/CropImage";

export default function FeaturedImage(props) {
    const {items, selectedItem, onUploadSuccess, onSelectImage} = props;

    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleCancel() {
        setVisible(false);
    }

    return (
        <div>
            <Button type="primary" onClick={showModal} style={{marginTop: 20}}>
                {selectedItem ? 'Change Featured Image' : 'Attach Featured Image'}
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
                    style={{margin: "0 20px", background: "#fff", padding: 20}}
                >
                    <TabPane tab="Upload" key="upload">
                        <DropzoneWrapper>
                            <Dropzone onUploadSuccess={onUploadSuccess}/>
                        </DropzoneWrapper>
                    </TabPane>
                    <TabPane tab="Images" key="featured">
                        <GalleryWrapper>
                            <Row>
                                {items.map((item, index) => (
                                    <Col key={index} lg={4} sm={6}>
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.file})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                paddingTop: "100%",
                                            }}
                                            className={classNames("gallery-item", {
                                                active: item.id === selectedItem?.id,
                                            })}
                                            onClick={() => onSelectImage(item)}
                                        >
                                            <CropImage
                                                imageTitle={item.title}
                                                imagePath={item.file}
                                                onUploadSuccess={onUploadSuccess}/>
                                        </div>
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
