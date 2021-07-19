import React from "react";
import AddCompany from "./AddCompany";
import EditCompany from "./EditCompany";

export default function SingleCompany(props) {
  const { companyId } = props;
  if (companyId !== "1234") {
    return <EditCompany companyId={companyId} />;
  }
  return <AddCompany />;
}
