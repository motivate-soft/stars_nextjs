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
        <Link href={`/admin/blog?id=${original.id}`}>{original.name}</Link>
      ),
    },
    // {
    //   Header: "Image",
    //   accessor: "image",
    //   width: 300,
    //   Cell: ({ row: { original } }) =>
    //     original?.image &&
    //     original.image?.file &&
    //     renderCell(original.image, "ImageCell", "file"),
    // },
    {
      Header: "Created At",
      accessor: "created_date",
      sortType: "basic",
    },
    {
      Header: "Updated At",
      accessor: "updated_date",
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
            <Link href={`blog?id=1234`}>
              <a>
                <Button type="primary" className="mateAddBlogBtn">
                  Add Blog
                </Button>
              </a>
            </Link>
          </div>
          {/* {loading && <Loader />}
          {items && (
            <div className="blogTable">
              <Scrollbars
                style={{ width: "100%", height: "calc(60vh - 70px)" }}
              >
                <AntReactTable columns={columns} data={items} />
              </Scrollbars>
            </div>
          )} */}
        </BlogListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
