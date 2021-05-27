import React, { useState, useEffect } from "react";

import { getCookie } from "@redux/authentication/auth.utils";
import authActions from "@redux/authentication/actions";
import classNames from "classnames";
import Loader from "@iso/components/utility/loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Col } from "antd";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";

import { BACKEND_URL } from "../../../../env-config";
import InfiniteGalleryWrapper from "./InfiniteGallery.styles";
import GalleryMedia from "../GalleryImage/GalleryMedia";
import DropzoneUploader from "@components/Admin/Dropzone/DropzoneUploader";

export default function InfiniteGallery(props) {
  const { selectedItem, onSelectImage } = props;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextHref, setNextHref] = useState(null);

  useEffect(() => {
    if (items.length === 0) {
      fetchInitialData();
    }
  }, [items]);

  function fetchInitialData() {
    fetch(`${BACKEND_URL}/api/media/list`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          authActions.logout();
        }

        return res.json();
      })
      .then(
        (res) => {
          if (res.next) {
            setItems(items.concat(res.results));
            setNextHref(res.next);
          } else {
            setItems(items.concat(res.results));
            setHasMore(false);
          }
        },
        (error) => {}
      );
  }

  function fetchItems() {
    fetch(`${nextHref}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          authActions.logout();
        }
        return res.json();
      })
      .then(
        (res) => {
          if (res.next) {
            setItems(items.concat(res.results));
            setNextHref(res.next);
          } else {
            setItems(items.concat(res.results));
            setHasMore(false);
          }
        },
        (error) => {
          console.log("error", error);
        }
      );
  }

  function onUploadSuccess() {
    setItems([]);
    setNextHref(null);
  }

  function onDeleteSucess() {
    setItems([]);
    setNextHref(null);
  }

  return (
    <Tabs
      defaultActiveKey="1"
      style={{ margin: "0 20px", background: "#fff", padding: 20 }}
    >
      <TabPane tab="Upload" key="upload">
        <DropzoneUploader onUploadSuccess={onUploadSuccess} />
      </TabPane>
      <TabPane tab="Images" key="featured">
        <InfiniteGalleryWrapper>
          {items && (
            <InfiniteScroll
              style={{
                height: "50vh",
                overflow: "auto",
                minHeight: "0 !important",
              }}
              className="ant-row"
              // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
              dataLength={items.length}
              next={fetchItems}
              hasMore={hasMore}
              loader={<Loader />}
              height={500}
            >
              {/* <Col lg={4} sm={6}>
                <GalleryMedia
                  showSelectButton
                  selected
                  image={selectedItem}
                  onSelect={onSelectImage}
                  onUploadSuccess={onUploadSuccess}
                  onDeleteSucess={onDeleteSucess}
                />
              </Col> */}
              {items
                // .filter((item) => item.id !== selectedItem.id)
                .map((item, index) => {
                  return (
                    <Col key={index} lg={4} sm={6}>
                      <GalleryMedia
                        showSelectButton
                        selected={item.id === selectedItem?.id}
                        image={item}
                        onSelect={onSelectImage}
                        onUploadSuccess={onUploadSuccess}
                        onDeleteSucess={onDeleteSucess}
                      />
                    </Col>
                  );
                })}
            </InfiniteScroll>
          )}
        </InfiniteGalleryWrapper>
      </TabPane>
    </Tabs>
  );
}
