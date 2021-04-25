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
import { CategoryListWrapper } from "./Category.styles";
import Loader from "@iso/components/utility/loader";
import categoryActions from "@redux/categories/actions";
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

const tableColumns = [
  {
    title: "Name",
    key: "name",
    width: 100,
    render: (object) => renderCell(object, "TextCell", "name"),
  },
  {
    title: "Created At",
    key: "created_date",
    width: 200,
    render: (object) => renderCell(object, "DateCell", "created_date"),
  },
  {
    title: "Updated At",
    key: "updated_date",
    width: 200,
    render: (object) => renderCell(object, "DateCell", "updated_date"),
  },
];

export default function CategoryList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Categories);

  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/category?id=${original.id}`}>{original.name}</Link>
      ),
    },
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
      minWidth: 300,
      Cell: ({ row: { original } }) => (
        <div className="opt-cell">
          <Link href={`/admin/category?id=${original.id}`}>
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

  function onDeleteCell(categoryId) {
    dispatch(categoryActions.deleteCategory(categoryId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Category</PageHeader>
      <Box>
        <CategoryListWrapper>
          <div className="categoryTableBtn">
            <Link href={`category?id=1234`}>
              <a>
                <Button type="primary" className="mateAddCategoryBtn">
                  Add Category
                </Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}
          {items && (
            <div className="categoryTable">
              <Scrollbars
                style={{ width: "100%", height: "calc(60vh - 70px)" }}
              >
                <AntReactTable columns={columns} data={items} />
              </Scrollbars>
            </div>
          )}
        </CategoryListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
