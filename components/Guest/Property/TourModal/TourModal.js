import React from 'react';
import {Modal} from "antd";
import Iframe from 'react-iframe';

export default function TourModal({isModalShowing, setIsTourModalShowing, tour360}) {
    return (
        <Modal
            visible={isModalShowing}
            onCancel={() => setIsTourModalShowing(false)}
            footer={null}
            maskStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
            wrapClassName="image_gallery_modal"
        >
            {
                tour360 &&
                <Iframe
                    loading="lazy"
                    url={`${tour360}`}
                    width="100%"
                    height="500px"
                    id="360tour"
                    className="360tour-iframe"
                    display="initial"
                    position="relative"
                />
            }
        </Modal>
    );
}
