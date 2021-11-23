import React, { useMemo } from "react";
import {useTable, useRowSelect} from 'react-table';

import { ColumnsFlight } from './columns';
import { ColumnsUser } from "./columnsUser";
import MOCK_DATA from './test-data.json'
  
export default function BasicTableNoSelect({columsLayout, dataToDisplay}) {

    const columns = useMemo(() => columsLayout, []);   
    const data = useMemo(() => dataToDisplay, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      })
    
      // Render the UI for your table
      return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
}
  