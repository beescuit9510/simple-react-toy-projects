import { type } from '@testing-library/user-event/dist/type';
import { FC } from 'react';
import * as XLSX from 'xlsx';

export interface Excel {
  sheets: pickSheet[];
  readonly title: string;
}

export interface Sheet {
  readonly url: string;
  readonly title: string;
  data: object[];
}

// export interface SheetWithData extends Sheet {
//   data: object[];
// }

// export const SHEET_KEYS: {
//   readonly TITLE: keyof Sheet;
//   readonly URL: keyof Sheet;
//   readonly DATA: keyof Sheet;
// } = {
//   TITLE: 'title',
//   URL: 'url',
//   DATA: 'data',
// };

export type pickSheet = Pick<Sheet, 'url' | 'title'>;

const fetchData = async (sheet: Sheet) => {
  try {
    const response = await fetch(sheet.url);
    const data = await response.json();
    sheet.data = data;
  } catch (e) {
    console.log(e);
  }
};

const createSheet = async (sheet: pickSheet, workBook: XLSX.WorkBook) => {
  const assertedSheet: Sheet = sheet as Sheet;

  await fetchData(assertedSheet);

  const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
    assertedSheet.data
  );

  XLSX.utils.book_append_sheet(workBook, workSheet, sheet.title);
};

const Download: FC<Excel> = ({ sheets, title }: Excel): JSX.Element => {
  const workBook: XLSX.WorkBook = XLSX.utils.book_new();

  sheets.forEach((sheet) => createSheet(sheet, workBook));

  const download = () => XLSX.writeFile(workBook, title);

  return <button onClick={download}>다운로드</button>;
};

export default Download;
