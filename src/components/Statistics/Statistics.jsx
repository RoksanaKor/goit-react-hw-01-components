import React from 'react';
import PropTypes from "prop-types";
import './statistics.css';

const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title !== '' && title}</h2>

      <ul className="stat-list">
        {stats.map(stat => {
          const {id, label, percentage} = stat;
          return (
            <li
              className="item"
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};