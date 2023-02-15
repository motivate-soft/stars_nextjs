import React, { useEffect, useState } from "react";
import mediaApi from "service/mediaApi";
import { MetaMediaDetailWrapper } from "./Meta.styles";
import { CopyIcon } from "@iso/config/icon.config";
// import { Tooltip, Space } from "antd";

const CopyToClipElement = ({ text }) => {
  const myRef = React.useRef(null);
  const [data, setData] = React.useState(text);
  React.useEffect(() => setData(text), [text]);

  React.useEffect(() => {
    if (myRef.current && data) {
      myRef.current.select();
      document.execCommand("copy");
      setData(null);
    }
  }, [data, myRef.current]);

  return <div>{data && <textarea ref={myRef}>{data}</textarea>}</div>;
};

export default function MetaMediaDetail(props) {
  const { imageId } = props;

  const [image, setImage] = useState(null);
  const [copyText, setCopyText] = React.useState(null);

  useEffect(() => {
    if (imageId) {
      fetchImageDetail();
    }
  }, [imageId]);

  async function fetchImageDetail() {
    try {
      const res = await mediaApi.getDetail(imageId);
      setImage(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  if (!image) return null;

  return (
    <MetaMediaDetailWrapper>
      <div className="detail-item">
        <div className="detail-label">URL</div>
        <div className="detail-value">
          <button onClick={() => setCopyText(image.file)}>
            <CopyIcon />
          </button>
          <div>{image.file}</div>
        </div>
      </div>
      <div className="detail-item">
        <div className="detail-label">Width</div>
        <div className="detail-value">
          <button onClick={() => setCopyText(image.width)}>
            <CopyIcon />
          </button>
          <div>{image.width}</div>
        </div>
      </div>
      <div className="detail-item">
        <div className="detail-label">Height</div>
        <div className="detail-value">
          <button onClick={() => setCopyText(image.height)}>
            <CopyIcon />
          </button>
          <div>{image.height}</div>
        </div>
      </div>

      <CopyToClipElement text={copyText} />
    </MetaMediaDetailWrapper>
  );
}
