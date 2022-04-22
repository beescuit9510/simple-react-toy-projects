import React, { FC } from 'react';
import * as XLSX from 'xlsx';
import './style.css';

interface Props {
  data: object[];
}

const ExcelTable: FC<Props> = ({ data }: Props): JSX.Element => {
  const headers: string[] = Object.keys(data[0]);

  const tableHeaders: JSX.Element[] = headers.map((head, idx) => (
    <th key={idx}>{head}</th>
  ));

  const tableRows: JSX.Element[] = data.map((row) => {
    const items: JSX.Element[] = headers.map((head, idx) => {
      return <td key={idx}>{row[head as keyof typeof row]}</td>;
    });

    return <tr>{items}</tr>;
  });

  const write = () => {
    var wb = XLSX.utils.table_to_book(document.getElementById('mytable'), {
      sheet: '시트명',
      raw: true,
    });

    XLSX.writeFile(wb, '파일명.xlsx');
  };

  return (
    <>
      <table id='mytable'>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <div>
        <button onClick={write}>다운로드</button>
      </div>
    </>
  );
};

export default ExcelTable;
