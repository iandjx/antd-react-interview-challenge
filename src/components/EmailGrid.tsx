import React from "react";
import { Column, useTable, useSortBy } from "react-table";

import makeData from "../makeData";

interface ITable<T extends object> {
  columns: Column<T>[];
  data: T[];
}

function Table<T extends object>({ columns, data }: ITable<T>) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<T>(
    {
      columns,
      data,
    },
    useSortBy
  );

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function EmailGrid() {
  const columns = React.useMemo(
    () => [
      {
        Header: "From",
        accessor: "from",
      },

      {
        Header: "To",
        accessor: "to",
      },
      {
        Header: "Subject",
        accessor: "subject",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} />;
}

export default EmailGrid;
