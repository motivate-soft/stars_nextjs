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
import { BlogListWrapper } from "./Blog.styles";
import Loader from "@iso/components/utility/loader";
import blogActions from "@redux/blogs/actions";

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

export default function BlogList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Blogs);

  useEffect(() => {
    dispatch(blogActions.getAllBlogs());
  }, []);

  const columns = [
    {
      Header: "Title",
      accessor: "title",
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/blog?id=${original.id}`}>{original.title}</Link>
      ),
    },
    {
      Header: "Image",
      accessor: "image",
      width: 300,
      Cell: ({ row: { original } }) =>
        renderCell(original, "ImageCell", "image"),
    },
    {
      Header: "Created by",
      accessor: "author_full_name",
      sortType: "basic",
    },
    {
      Header: "Published On",
      accessor: "published_date",
      sortType: "basic",
    },
    {
      Header: "Action",
      accessor: "action",
      minWidth: 200,
      Cell: ({ row: { original } }) => (
        <div className="opt-cell">
          <Link href={`/admin/blog?id=${original.id}`}>
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

  function onDeleteCell(blogId) {
    dispatch(blogActions.deleteBlog(blogId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Blog</PageHeader>
      <Box>
        <BlogListWrapper>
          <div className="blogTableBtn">
            <Link href={`blog?id=new`}>
              <a>
                <Button type="primary">
                  Add Blog
                </Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}
          {items && (
            <div className="blogTable">
              <Scrollbars
                style={{ width: "100%", height: "calc(100vh - 400px)" }}
              >
                <AntReactTable columns={columns} data={items} />
              </Scrollbars>
            </div>
          )}
        </BlogListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
