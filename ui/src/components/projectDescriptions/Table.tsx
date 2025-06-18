/* eslint-disable @typescript-eslint/no-explicit-any */
import get from 'lodash.get';
import type { TableComponent } from '../../types/portfolioTypes';

type TableProps = {
  data: TableComponent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dynamicData?: any;
}

export default function Table({data, dynamicData}: TableProps) {
  let dataForRows = [];
  if(data.rowDataPath && dynamicData) {
    dataForRows = get(dynamicData, data.rowDataPath, [])
  }

  const isValidTable = (table: TableComponent) =>
    table.rows?.every(row => row.length === table.headers.length);

  if(!isValidTable) {
    console.error('Check table data, the number of headers does not match the number of table data items in one or more rows ');
  }

  return (
    <table className={data.className ? data.className : ''}>
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
        {data.rows?.map((row, index) => (
          <tr key={index}>
            {row.map((td, i) => {
              if(typeof td === 'string') {
                return (<td key={i}>{td}</td>)
              } else {
                return (<td key={i}><a href={td.href}>{td.text}</a></td>)
              }}
            )}
          </tr>
        ))}

        {dataForRows?.map((row: any, i: number) => (
          <tr key={i}>
            {data.dynamicRows?.map((dynamicRow, index) => {
              if(dynamicRow.propertyName === 'index') {
                return (<td key={index}>{i}</td>)
              } else {
                
                
                if(dynamicRow.type === 'number') {
                  return (<td key={index}>{row[dynamicRow.propertyName].toFixed(dynamicRow.rounding)}</td>)
                } else if (dynamicRow.type === 'string'){
                  return (<td key={index}>{row[dynamicRow.propertyName]}</td>)
                } else if (dynamicRow.type === 'numberArray') {
                  return (
                    <td key={index}><span>[</span>
                      {row[dynamicRow.propertyName].map((el: number, j: number) => (
                        (
                          <span key={j}>
                            {el.toFixed(dynamicRow.rounding)}
                            {j < row[dynamicRow.propertyName].length - 1 && ', '}
                          </span>
                        )
                      ))}
                    <span>]</span></td>
                  )
                }
              }
            }
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
