import React, { FC } from 'react';
import './style.css';
const log = (message?: any | any[]) => {
  console.log(message);
};

interface Props {
  data: object[];
}

const Excel: FC<Props> = ({ data }: Props): JSX.Element => {
  const headers: string[] = Object.keys(data[0]);

  const tableHeaders: JSX.Element[] = headers.map((head) => <th>{head}</th>);

  const tableRows: JSX.Element[] = data.map((row) => {
    const items: JSX.Element[] = headers.map((head) => {
      return <td>{row[head as keyof typeof row]}</td>;
    });

    return <tr>{items}</tr>;
  });

  return (
    <table id='table'>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Excel;
