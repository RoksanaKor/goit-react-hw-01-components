import React from 'react';
import PropTypes from "prop-types";
import './transactionHistory.css';

export const TransactionHistory = ({ items }) => {
  let elemColor = false;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { id, type, amount, currency} = item;
          elemColor = !elemColor;
          return (
            <tr key={id} style={{ backgroundColor: elemColor ? "rgb(255, 255, 255)" : "rgb(208, 199, 189)" }}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
          
        })}
      </tbody>
    </table>
  );
};


TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,

};