import React, { useState } from "react";
import { IoIosCrop, IoIosTrash, IoMdCheckmark } from "react-icons/io";
import { notification } from "@iso/components";
import mediaApi from "../../../../service/mediaApi";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import classNames from "classnames";
import AdminGalleryImageWrapper from "./GalleryMedia.styles";
import { PropTypes } from "prop-types";
import CropImageModal from "@components/Admin/Gallery/GalleryImage/CropImageModal";

export default function GalleryMedia(props) {
  const {
    propertyId,
    image,
    onUploadSuccess,
    onDeleteSucess,
    selected,
    onSelect,
    showSelectButton,
  } = props;
  const [isCropModalShowing, setIsCropModalShowing] = useState(false);

  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  async function handleSaveCroppedImage(image, imageData) {
    let file;
    try {
      file = await urltoFile(imageData, `cropped-${image.title}`, {
        type: "image/png",
      });
    } catch (error) {
      console.log("error", error);
      return;
    }
    console.log("file", file);
    const body = new FormData();
    body.append("file", file);

    if (propertyId) {
      body.append("property", propertyId);
    }

    try {
      const res = await mediaApi.add(body);
      notification("success", "Cropped image saved!");
      onUploadSuccess(res);
      console.log("handleSaveCroppedImage", res);
    } catch (error) {
      console.log("error", error);
    }
    setIsCropModalShowing(false);
  }

  async function handleDeleteImage(imageId) {
    try {
      let res = await mediaApi.delete(imageId);
      onDeleteSucess(imageId);
      notification("success", "file deleted successfully!");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <AdminGalleryImageWrapper
      imageUrl={image.file}
      active={selected}
      className={classNames({ active: selected })}
    >
      <div className="action-buttons">
        {showSelectButton && (
          <div className="image-action-button">
            <IoMdCheckmark onClick={() => onSelect(image)} />
          </div>
        )}

        <div className="image-action-button">
          <IoIosCrop onClick={() => setIsCropModalShowing(true)} />
          <CropImageModal
            imagePath={image.file}
            show={isCropModalShowing}
            onSave={(imageData) => handleSaveCroppedImage(image, imageData)}
            onCancel={() => setIsCropModalShowing(false)}
          />
        </div>
        <Popconfirm
          title="Are you sure to delete this image?"
          onConfirm={() => {
            if (selected) {
              notification("warning", "Please change featured image!");
              return;
            }
            handleDeleteImage(image.id);
          }}
        >
          <div className="image-action-button">
            <IoIosTrash />
          </div>
        </Popconfirm>
      </div>
    </AdminGalleryImageWrapper>
  );
}

GalleryMedia.prototype = {
  propertyId: PropTypes.number,
  image: PropTypes.object,
  selected: PropTypes.bool,
  showSelectButton: PropTypes.bool,
  onSelect: PropTypes.func,
  onUploadSuccess: PropTypes.func,
  onDeleteSucess: PropTypes.func,
};

GalleryMedia.defaultProps = {
  showSelectButton: false,
};
