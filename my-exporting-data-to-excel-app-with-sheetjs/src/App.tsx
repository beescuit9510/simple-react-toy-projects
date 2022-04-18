import React, { FC, useEffect, useState } from 'react';
import './App.css';
import * as XLSX from 'xlsx';

const useFetch = (url: string): object[] => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [url]);

  return data;
};

interface Props {
  url: string;
}

const Download: FC<Props> = ({ url }: Props): JSX.Element => {
  const data: object[] = useFetch(url);

  const wb: XLSX.WorkBook = XLSX.utils.book_new();

  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  const download = () => {
    XLSX.writeFile(wb, 'Test.xlsx');
  };

  return <button onClick={download}>다운로드</button>;
};

const App: FC = (): JSX.Element => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  return <Download url={url} />;
};

export default App;
