import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Row, Col } from "antd";
import AdminGalleryImage from "./../AdminGalleryImage/AdminGalleryImage";

export default class SortableMediaGallery extends React.Component {
  render() {
    const {
      propertyId,
      items,
      onSortEnd,
      onUploadSuccess,
      onDeleteSucess,
    } = this.props;

    const SortableItem = SortableElement(({ item }) => {
      return (
        <Col lg={4} sm={6}>
          <AdminGalleryImage
            propertyId={propertyId}
            image={item}
            onUploadSuccess={onUploadSuccess}
            onDeleteSucess={onDeleteSucess}
          />
        </Col>
      );
    });

    const SortableList = SortableContainer(({ items }) => (
      <Row className="media-scroll-gallery">
        {items.map((item, index) => {
          return <SortableItem key={`${item.id}`} index={index} item={item} />;
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
