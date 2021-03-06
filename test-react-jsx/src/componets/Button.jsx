import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

Button.propTypes = { children: PropTypes.string, onClick: PropTypes.func };

export { Button };
