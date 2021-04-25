import { Pagination, Input } from "antd";
import {
  useTable,
  useFilters,
  useSortBy,
  usePagination,
  useBlockLayout,
  useGlobalFilter,
} from "react-table";
import TableWrapper from "./AntReactTable.styles";

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

function AntReactTable({ columns, data }) {
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

  return (
    <TableWrapper>
      <Pagination
        className="reactTablePagination"
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

      <table {...getTableProps()} className="propertyListTable">
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
    </TableWrapper>
  );
}

export default AntReactTable;
