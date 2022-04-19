import { FC } from 'react';
import Download, { Sheet, Excel } from './Download';

const App: FC = (): JSX.Element => {
  const sheet: Sheet = {
    url: 'https://jsonplaceholder.typicode.com/users',
    title: 'sheet1',
    data: [],
  };
  const sheet2: Sheet = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    title: 'sheet2',
    data: [],
  };

  const excel: Excel = {
    sheets: [sheet, sheet2],
    title: 'test.xlsx',
  };

  return <Download {...excel} />;
};

export default App;
