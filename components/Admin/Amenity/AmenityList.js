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
import CardWrapper from "./AmenityList.styles";

import amenityActions from "@redux/amenities/actions";
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

export default function AmenityList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Amenities);

  useEffect(() => {
    dispatch(amenityActions.getAllAmenities());
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      width: 300,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/amenity?id=${original.id}`}>{original.name}</Link>
      ),
    },
    {
      Header: "Image",
      accessor: "image",
      width: 300,
      Cell: ({ row: { original } }) => (
        <>{renderCell(original.image, "ImageCell", "file")}</>
      ),
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
          <Link href={`/admin/amenity?id=${original.id}`}>
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

  function onDeleteCell(amenityId) {
    dispatch(amenityActions.deleteAmenity(amenityId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Amenity</PageHeader>
      <Box>
        <CardWrapper>
          <div className="amenityTableBtn">
            <Link href={`amenity?id=1234`}>
              <a>
                <Button type="primary" className="mateAddAmenityBtn">
                  Add Amenity
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
