import React from "react";
import {SortableContainer, SortableElement} from "react-sortable-hoc";
import {Row, Col} from "antd";
import classNames from "classnames";

export default class SortableMediaGallery extends React.Component {
    render() {
        const {items, onSortEnd} = this.props;

        const SortableItem = SortableElement(({item}) => {
            return (
                <Col lg={4} sm={6}>
                    <div
                        style={{
                            backgroundImage: `url(${item.file})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            paddingTop: "100%",
                        }}
                        className="gallery-item"
                    ></div>
                </Col>
            );
        });

        const SortableList = SortableContainer(({items}) => (
            <Row className="media-scroll-gallery">
                {items.map((item, index) => {
                    return <SortableItem key={`${item.id}`} index={index} item={item}/>;
                })}
            </Row>
        ));

        return (
            <SortableList
                items={items}
                onSortEnd={onSortEnd}
                axis="xy"
                distance={3}
                helperClass="SortableHelper"
            />
        );
    }
}
