import Modal from "@iso/components/Feedback/Modal";

import React, {useState} from "react";
import Tabs, {TabPane} from "@iso/components/uielements/tabs";
import {Button} from "antd";
import DropzoneWrapper from "../../Property/Dropzone/Dropzone.styles";
import Dropzone from "../../Property/Dropzone/Dropzone";
import GalleryWrapper from "../../Property/Gallery/Gallery.styles";
import InfiniteGallery from "./InfiniteGallery";

export default function BlogMediaManager(props) {
    const {image, onSelectImage} = props;

    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    }

    function handleCancel() {
        setVisible(false);
    }

    return (
        <div style={{marginBottom: 20}}>
            <Button type="primary" onClick={showModal} style={{marginTop: 20}}>
                Attach Featured Image
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
                    style={{margin: "0 20px", background: "#fff", padding: 20}}
                >
                    <TabPane tab="Upload" key="upload">
                        <DropzoneWrapper>
                            <Dropzone onUploadSuccess={() => {
                            }}/>
                        </DropzoneWrapper>
                    </TabPane>
                    <TabPane tab="Images" key="featured">
                        <GalleryWrapper>
                            <InfiniteGallery
                                selectedItem={image}
                                onSelectImage={onSelectImage}
                            />
                        </GalleryWrapper>
                    </TabPane>
                </Tabs>
            </Modal>
        </div>
    );
}
