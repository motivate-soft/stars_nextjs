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
import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import CardWrapper from "./PropertyList.styles";
import {
  useTable,
  useFilters,
  useSortBy,
  usePagination,
  useBlockLayout,
  useGlobalFilter,
} from "react-table";
import propertyActions from "@redux/properties/actions";
import { useDispatch, useSelector } from "react-redux";
import { Select, Pagination, Input, Row, Col } from "antd";
const Option = { Select };

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <div>
      <Input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Search ${count} records...`}
      />
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

function PropertyDataTable({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const onPageChange = (page) => {
    gotoPage(page - 1);
  };

  function onShowSizeChange(current, pageSize) {
    setPageSize(pageSize);
  }

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    rows,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useBlockLayout,
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination
  );

  console.log("pagination", pageIndex, pageCount);

  return (
    <>
      <Pagination
        defaultCurrent={1}
        current={pageIndex + 1}
        onChange={onPageChange}
        total={rows.length}
        itemRender={itemRender}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />

      <table {...getTableProps()}>
        <thead className="ant-table-thead">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                if (column.id === "action") {
                  return (
                    <th className="ant-table-cell" {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                } else {
                  return (
                    <th className="ant-table-cell" {...column.getHeaderProps()}>
                      {column.render("Header")}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  );
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody className="ant-table-tbody" {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                className="ant-table-row ant-table-row-level-0"
                key={index}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      key={i}
                      className="ant-table-cell"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

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
      accessor: "bookervilleID",
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
          <div className="isoPropertyTableBtn">
            <Link href={`property?id=1234`}>
              <a>
                <Button type="primary" className="mateAddPropertyBtn">
                  Add Property
                </Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}
          {items && (
            <div className="isoPropertyTable">
              <Scrollbars
                style={{ width: "100%", height: "calc(60vh - 70px)" }}
              >
                <PropertyDataTable columns={columns} data={items} />
              </Scrollbars>
            </div>
          )}
        </CardWrapper>
      </Box>
    </LayoutWrapper>
  );
}
