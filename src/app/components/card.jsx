import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ name, bags }) {
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{name}</span>
        <p>{`${bags} bags`}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  bags: PropTypes.number.isRequired,
};
