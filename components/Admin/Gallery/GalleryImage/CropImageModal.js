import React, { useRef, useState } from "react";
import { Row, Col, Modal } from "antd";
import Box from "@iso/ui/Box/Box";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const cropSetting = {
  unit: "%",
  width: 80,
  height: 40,
  // aspect: 16 / 9,
};

export default function CropImageModal(props) {
  const { imagePath, show, onSave, onCancel } = props;

  const [crop, setCrop] = useState(cropSetting);
  const [croppedImage, setCroppedImage] = useState(null);

  const imageRef = useRef(null);

  function onImageLoaded(image) {
    imageRef.current = image;
    console.log("onImageLoaded", imageRef);
  }

  function onCropComplete(crop) {
    makeClientCrop(crop);
  }

  function onCropChange(crop, percentCrop) {
    setCrop(crop);
  }

  async function makeClientCrop(crop) {
    if (imageRef.current && crop.width && crop.height) {
      const newCroppedImage = await getCroppedImg(
        imageRef.current,
        crop,
        "crop.jpeg"
      );
      setCroppedImage(newCroppedImage);
    }
  }

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = Math.ceil(crop.width * scaleX);
    canvas.height = Math.ceil(crop.height * scaleY);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return canvas.toDataURL("image/jpeg");

    // return new Promise((resolve, reject) => {
    //     canvas.toBlob(blob => {
    //         if (!blob) {
    //             //reject(new Error('Canvas is empty'))
    //             console.error('Canvas is empty')
    //             return
    //         }
    //         blob.name = fileName
    //         window.URL.revokeObjectURL(fileUrl)
    //         fileUrl = window.URL.createObjectURL(blob)
    //         resolve(fileUrl)
    //     }, 'image/jpeg')
    // })
  }

  return (
    <>
      <Modal
        visible={show}
        className="crop-modal"
        title="Crop image"
        okText="Save"
        onOk={() => onSave(croppedImage)}
        onCancel={onCancel}
      >
        <Box>
          <Row>
            <Col sm={16}>
              {imagePath && (
                <ReactCrop
                  className="d-block mx-auto"
                  src={imagePath}
                  crossorigin="*"
                  crop={crop}
                  ruleOfThirds
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                />
              )}
            </Col>
            <Col sm={8}>
              {croppedImage && (
                <img
                  alt="Crop"
                  style={{ width: "100%" }}
                  crossOrigin="*"
                  src={croppedImage}
                />
              )}
            </Col>
          </Row>
        </Box>
      </Modal>
    </>
  );
}
