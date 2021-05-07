import React, {useState, useEffect} from "react";
import {getCookie} from "@redux/authentication/auth.utils";
import authActions from "@redux/authentication/actions";
import classNames from "classnames";
import Loader from "@iso/components/utility/loader";
import InfiniteScroll from "react-infinite-scroll-component";
import {Row, Col} from "antd";
import {BACKEND_URL} from "../../../../env-config";
import InfiniteGalleryWrapper from "./InfiniteGallery.styles";

export default function InfiniteGallery(props) {
    const {selectedItem, onSelectImage} = props;
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [nextHref, setNextHref] = useState(null);

    useEffect(() => {
        fetchInitialData();
    }, []);

    function fetchInitialData() {
        fetch(`${BACKEND_URL}/api/media/list`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${getCookie("token")}`,
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
                }
            );
    }

    function fetchItems() {
        fetch(`${nextHref}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: `Bearer ${getCookie("token")}`,
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

    return (
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
                    loader={<Loader/>}
                    height={500}
                >
                    {items.map((item, index) => {
                        return (
                            <Col key={index} lg={4} sm={6}>
                                <div
                                    style={{
                                        backgroundImage: `url(${item.file})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        height: "100px",
                                    }}
                                    className={classNames("gallery-item", {
                                        active: item.id === selectedItem?.id,
                                    })}
                                    onClick={() => onSelectImage(item)}
                                />
                            </Col>
                        );
                    })}
                </InfiniteScroll>
            )}
        </InfiniteGalleryWrapper>
    );
}
