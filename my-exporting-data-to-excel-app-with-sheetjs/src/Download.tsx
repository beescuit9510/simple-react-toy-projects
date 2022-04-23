import { FC } from 'react';
import * as XLSX from 'xlsx';

export interface Excel {
  sheets: Sheet[];
  readonly title: string;
}

export interface Sheet {
  data?: object[];
  readonly url: string;
  readonly title: string;
}

const fetchData = async (sheet: Sheet) => {
  try {
    const response = await fetch(sheet.url);
    const data = await response.json();
    sheet.data = data;
  } catch (e) {
    console.log(e);
  }
};

const createSheet = async (sheet: Sheet, workBook: XLSX.WorkBook) => {
  await fetchData(sheet);

  if (sheet.data !== null && sheet.data !== undefined) {
    const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(sheet.data);

    XLSX.utils.book_append_sheet(workBook, workSheet, sheet.title);
  }
};

const Download: FC<Excel> = ({ sheets, title }: Excel): JSX.Element => {
  const workBook: XLSX.WorkBook = XLSX.utils.book_new();

  sheets.forEach((sheet) => createSheet(sheet, workBook));

  const download = () => XLSX.writeFile(workBook, title);

  return <button onClick={download}>다운로드</button>;
};

export default Download;
