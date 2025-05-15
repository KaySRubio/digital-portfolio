
import type { TableComponent } from '../types/portfolioTypes';
type TableProps = {
  data: TableComponent;
}

export default function Table({data}: TableProps) {
  const isValidTable = (table: TableComponent) =>
    table.rows.every(row => row.length === table.headers.length);

  if(!isValidTable) {
    console.error('Check table data, the number of headers does not match the number of table data items in one or more rows ');
  }

  return (
    <table>
      <thead>
        <tr>
        {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((td, index) => (
              <td key={index}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/*
        {data.headers.map((header, index) => {
          <th key={index}>{header}</th>
        })}
*/