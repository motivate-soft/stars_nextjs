import React, { useEffect } from "react";
import clone from "clone";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import HelperText from "@iso/components/utility/helper-text";
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
import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import { TagListWrapper } from "./Tag.styles";
import Loader from "@iso/components/utility/loader";
import tagActions from "@redux/tags/actions";
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

export default function TagList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Tags);

  useEffect(() => {
    dispatch(tagActions.getAllTags());
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/tag?id=${original.id}`}>{original.name}</Link>
      ),
    },
    {
      Header: "Action",
      accessor: "action",
      minWidth: 200,
      Cell: ({ row: { original } }) => (
        <div className="opt-cell">
          <Link href={`/admin/tag?id=${original.id}`}>
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

  function onDeleteCell(tagId) {
    dispatch(tagActions.deleteTag(tagId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Tag</PageHeader>
      <Box>
        <TagListWrapper>
          <div className="tagTableBtn">
            <Link href={`tag?id=new`}>
              <a>
                <Button type="primary" className="mateAddTagBtn">
                  Add Tag
                </Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}
          {items && (
            <div className="tagTable">
              <Scrollbars
                style={{ width: "100%", height: "calc(100vh - 400px)" }}
              >
                <AntReactTable columns={columns} data={items} />
              </Scrollbars>
            </div>
          )}
        </TagListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
