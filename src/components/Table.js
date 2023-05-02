import React from 'react';
import data from '../data/info.js'

const Table = () => {
  const revenueValues = data.map((item) => item.indicators.find((indicator) => indicator.name === "revenue").value);
  const expensesValues = data.map((item) => item.indicators.find((indicator) => indicator.name === "expenses").value);

  return (
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Revenue</th>
          <th>Expenses</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.month}</td>
            <td>{revenueValues[index]}</td>
            <td>{expensesValues[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
