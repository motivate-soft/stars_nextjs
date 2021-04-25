import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Button from "@iso/components/uielements/button";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Loader from "@iso/components/utility/loader";
import CardWrapper from "./PropertyList.styles";

import propertyActions from "@redux/properties/actions";
import { useDispatch, useSelector } from "react-redux";
import AntReactTable from "../Datatable/AntReactTable";

export default function PropertyList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Properties);

  useEffect(() => {
    dispatch(propertyActions.getAllProperties());
  }, []);

  const columns = [
    {
      Header: "Title",
      accessor: "name",
      width: 400,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/property?id=${original.id}`}>{original.name}</Link>
      ),
    },
    {
      Header: "Address",
      accessor: "address",
      width: 300,
      sortType: "basic",
    },
    {
      Header: "BookervilleID",
      accessor: "bookerville_id",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Updated date",
      accessor: "updated_date",
      width: 300,
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      minWidth: 300,
      Cell: ({ row: { original } }) => (
        <div className="opt-cell">
          <Link href={`/admin/property?id=${original.id}`}>
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

  function onDeleteCell(propertyId) {
    dispatch(propertyActions.deleteProperty(propertyId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Property</PageHeader>
      <Box>
        <CardWrapper>
          <div className="propertyTableBtn">
            <Link href={`property?id=1234`}>
              <a>
                <Button type="primary" className="addPropertyBtn">
                  Add Property
                </Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}
          {items && (
            <Scrollbars style={{ width: "100%", height: "calc(60vh - 70px)" }}>
              <AntReactTable columns={columns} data={items} />
            </Scrollbars>
          )}
        </CardWrapper>
      </Box>
    </LayoutWrapper>
  );
}
