import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.listItem}
            key={id}
            style={{ backgroundColor: getRandomRGBColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

function getRandomRGBColor() {
  //to prevent color be too light
  return `rgb(${Math.floor(Math.random() * 235)}, ${Math.floor(
    Math.random() * 235,
  )}, ${Math.floor(Math.random() * 235)})`;
}

export default Statistics;
