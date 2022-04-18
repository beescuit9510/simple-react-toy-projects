import React from 'react';
import Excel from './components/Excel';

const App = () => {
  let data = [
    { name: 'yun', age: 19, family: 'madrigal' },
    { name: 'yun', age: 19, family: 'madrigal' },
    { name: 'yun', age: 19, family: 'madrigal' },
    { name: 'yun', age: 19, family: 'madrigal' },
    { name: 'yun', age: 19, family: 'madrigal' },
    { name: 'yun', age: 19, family: 'madrigal' },
    { name: 'yun', age: 19, family: 'madrigal' },
  ];

  return (
    <div className='App'>
      <Excel data={data} />
    </div>
  );
};

export default App;
