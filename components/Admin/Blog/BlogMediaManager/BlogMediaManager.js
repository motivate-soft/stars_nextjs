import Modal from "@iso/components/Feedback/Modal";

import React, {useState} from "react";
import Tabs, {TabPane} from "@iso/components/uielements/tabs";
import {Button} from "antd";
import InfiniteGallery from "@components/Admin/Gallery/InfiniteGallery/InfiniteGallery";
import DropzoneUploader from "@components/Admin/Dropzone/DropzoneUploader";

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
                {image ? "Change" : "Attach"} Cover Image
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
                        <DropzoneUploader onUploadSuccess={() => {
                        }}/>
                    </TabPane>
                    <TabPane tab="Images" key="featured">
                        <InfiniteGallery
                            selectedItem={image}
                            onSelectImage={onSelectImage}
                        />
                    </TabPane>
                </Tabs>
            </Modal>
        </div>
    );
}
