import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <div className={css.wrapper}>
      <button type="button" className={css.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;