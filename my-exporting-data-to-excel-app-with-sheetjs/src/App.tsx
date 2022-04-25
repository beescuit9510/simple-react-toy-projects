import { FC } from 'react';
import Download, { Sheet, Excel, pickSheet } from './Download';
import ExcelTable from './ExcelTable';

const App: FC = (): JSX.Element => {
  const sheet: pickSheet = {
    url: 'https://jsonplaceholder.typicode.com/users',
    title: 'sheet1',
  };
  const sheet2: pickSheet = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    title: 'sheet2',
  };

  const excel: Excel = {
    sheets: [sheet, sheet2],
    title: 'test.xlsx',
  };

  return <Download {...excel} />;
};

// const App = () => {
//   let data = [
//     { name: 'yun', age: 19, family: 'madrigal' },
//     { name: 'yun', age: 19, family: 'madrigal' },
//     { name: 'yun', age: 19, family: 'madrigal' },
//     { name: 'yun', age: 19, family: 'madrigal' },
//     { name: 'yun', age: 19, family: 'madrigal' },
//     { name: 'yun', age: 19, family: 'madrigal' },
//     { name: 'yun', age: 19, family: 'madrigal' },
//   ];

//   return (
//     <div className='App'>
//       <ExcelTable data={data} />
//     </div>
//   );
// };

export default App;
