
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
        {data.headers.map((header, index) => {
          if(typeof header === 'string') {
            return (<th key={index}>{header}</th>)
          } else {
            return (<th key={index}><a href={header.href}>{header.text}</a></th>)
          }})}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((td, index) => {
              if(typeof td === 'string') {
                return (<td key={index}>{td}</td>)
              } else {
                return (<td key={index}><a href={td.href}>{td.text}</a></td>)
              }}
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
