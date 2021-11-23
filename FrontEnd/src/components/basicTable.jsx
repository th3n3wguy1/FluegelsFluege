import React, { useMemo } from "react";
import {useTable, useRowSelect} from 'react-table';



export default function BasicTable(props) {

    const columns = useMemo(() => props.columsLayout, []);   
    const data = useMemo(() => props.dataToDisplay, []);

    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: {selectedRowIds},
    } = useTable(
        {
            columns,
            data,
            stateReducer: (newState, action) => {
                if (action.type === "toggleRowSelected") {
                  newState.selectedRowIds = {
                    [action.id]: true
                  }
                }

                return newState;
            },
          },
          useRowSelect,
          hooks => {
            hooks.visibleColumns.push(columns => [
              // Let's make a column for selection
              {
                id: 'selection',
                // The header can use the table's getToggleAllRowsSelectedProps method
                // to render a checkbox
                Header: (
                  <div/>
                ),
                // The cell can use the individual row's getToggleRowSelectedProps method
                // to the render a checkbox
                Cell: ({ row }) => (
                  <div>
                    <button >Buchen</button>
                  </div>
                ),
              },
              ...columns,
            ])
          }
        )

        const IndeterminateCheckbox = React.forwardRef(
            ({ indeterminate, ...rest }, ref) => {
                const defaultRef = React.useRef()
                const resolvedRef = ref || defaultRef
            
                React.useEffect(() => {
                resolvedRef.current.indeterminate = indeterminate
                }, [resolvedRef, indeterminate])
            
                return (
                <>
                    <input 
                    type="checkbox" 
                    ref={resolvedRef} {...rest} />
                </>
                )
            }
        )

      
        // Render the UI for your table
        return (
          <>
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
                        return (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )})}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            <getID />
            <pre>
              <code>
                {JSON.stringify(
                  {
                    selectedRowIds: selectedRowIds,
                    'selectedFlatRows[].original': selectedFlatRows.map(
                     d => d.original._id
                    ),
                  },
                  null,
                  2
                )}
              </code>
            </pre>
          </>
        )
      }
  
/*
onClick={(e) => alert(JSON.stringify(data[1]._id))} 

<pre>
            <code>
            {JSON.stringify(
                {
                'selectedFlatRows[].original': selectedFlatRows.map(
                    d => d.original._id
                ),
                },
                null,
                2
            )}
            </code>
        </pre>
*/