import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Button from "@iso/components/uielements/button";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
} from "@iso/components/Tables/HelperCells";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Loader from "@iso/components/utility/loader";
import { CompanyListWrapper } from "./CompanyList.styles";

import companyActions from "@redux/companies/actions";
import { useDispatch, useSelector } from "react-redux";
import AntReactTable from "../Datatable/AntReactTable";

const renderCell = (object, type, key) => {
  const value = object[key] ? object[key] : "";
  switch (type) {
    case "ImageCell":
      return ImageCell(value);
    case "DateCell":
      return DateCell(value);
    case "LinkCell":
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

export default function CompanyList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Companies);

  useEffect(() => {
    dispatch(companyActions.getAllCompanies());
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      width: 300,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/company?id=${original.id}`}>{original.name}</Link>
      ),
    },
    {
      Header: "Image",
      accessor: "image",
      width: 300,
      Cell: ({ row: { original } }) =>
        original?.image && renderCell(original, "ImageCell", "image"),
    },
    {
      Header: "Created At",
      accessor: "created_date",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Updated date",
      accessor: "updated_date",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      minWidth: 300,
      Cell: ({ row: { original } }) => (
        <div className="opt-cell">
          <Link href={`/admin/company?id=${original.id}`}>
            <EditOutlined />
          </Link>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onDeleteCell(original.id)}
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>
      ),
    },
  ];

  function onDeleteCell(companyId) {
    dispatch(companyActions.deleteCompany(companyId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Company</PageHeader>
      <Box>
        <CompanyListWrapper>
          <div className="companyTableBtn">
            <Link href={`company?id=1234`}>
              <a>
                <Button type="primary">Add Company</Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}

          {items && (
            <Scrollbars
              style={{ width: "100%", height: "calc(100vh - 400px)" }}
            >
              <AntReactTable columns={columns} data={items} />
            </Scrollbars>
          )}
        </CompanyListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
