import { Input } from "antd";
import React, { useEffect, useState } from "react";
import mediaApi from "service/mediaApi";
import { MetaMediaDetailWrapper } from "./Meta.styles";
const { TextArea } = Input;

export default function MetaMediaDetail(props) {
  const { imageId } = props;

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imageId) {
      fetchImageDetail();
    }
  }, [imageId]);

  async function fetchImageDetail() {
    try {
      const res = await mediaApi.getDetail(imageId);
      console.log("MetaMediaDetail", res);
      setImage(res);
    } catch (error) {
      console.log("error", error);
    }
  }
  function handleChange() {
    return;
  }
  if (!image) return null;

  return (
    <MetaMediaDetailWrapper>
      <div className="detail-item">
        <label>URL</label>
        <TextArea rows={10} defaultValue={image.file} onChange={handleChange} />
      </div>
      <div className="detail-item">
        <Input
          addonBefore="Width"
          defaultValue={image.width}
          onChange={handleChange}
        />
      </div>
      <div className="detail-item">
        <Input
          addonBefore="Height"
          defaultValue={image.height}
          onChange={handleChange}
        />
      </div>
    </MetaMediaDetailWrapper>
  );
}
