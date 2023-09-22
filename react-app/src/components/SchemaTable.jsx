import React from 'react';
import { useTable } from 'react-table';

const SchemaTable = ({ schemaData }) => {
    const columns = React.useMemo(() => {
        if (!schemaData || schemaData.length === 0) return []; /* If schemaData is empty or null, an empty array is returned */
        const sampleRow = schemaData[0];
        return Object.keys(sampleRow).map(key => ({
          Header: key,
          accessor: key,
        }));
      }, [schemaData]);
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data: schemaData,
      });
    
      return (
        <div>
          <table {...getTableProps()} className="table">
            {/* Table Header */}
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} key={column.id}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
    
            {/* Table Body */}
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.id}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} key={cell.column.id}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };
    
export default SchemaTable;
