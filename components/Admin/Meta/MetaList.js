import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
} from "@iso/components/Tables/HelperCells";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Loader from "@iso/components/utility/loader";
import MetaListWrapper from "./Meta.styles";
import metaActions from "@redux/meta/actions";
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

export default function MetaList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Meta);

  useEffect(() => {
    dispatch(metaActions.getAllMeta());
  }, []);

  const columns = [
    {
      Header: "Page",
      accessor: "slug",
      width: 300,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/meta?slug=${original.slug}`}>{original.slug}</Link>
      ),
    },
    {
      Header: "Title",
      accessor: "title",
      width: 300,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/meta?id=${original.slug}`}>{original.title}</Link>
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
          <Link href={`/admin/meta?slug=${original.slug}`}>
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

  function onDeleteCell(metaId) {
    dispatch(metaActions.deleteMeta(metaId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Meta</PageHeader>
      <Box>
        <MetaListWrapper>
          {loading && <Loader />}

          {items && (
            <Scrollbars style={{ width: "100%", height: "calc(60vh - 70px)" }}>
              <AntReactTable columns={columns} data={items} />
            </Scrollbars>
          )}
        </MetaListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
