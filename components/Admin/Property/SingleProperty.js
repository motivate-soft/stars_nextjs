import React from "react";
import AddProperty from "./AddProperty";
import EditProperty from "./EditProperty";

export default function SingleProperty(props) {
  const { propertyId } = props;
  if (propertyId !== "1234") {
    return <EditProperty propertyId={propertyId} />;
  }
  return <AddProperty />;
}
