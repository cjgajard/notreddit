import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoryNav = props => (
  <ul className="nav">
    {
      props.title && (<li className="nav-item">{props.title}</li>)
    }
    <li className={`nav-item ${(props.active === 'home') ? 'active' : ''}`}>
      <Link to="/">news</Link>
    </li>
    <li className={`nav-item ${(props.active === 'submit') ? 'active' : ''}`}>
      <Link to="/submit">submit</Link>
    </li>
  </ul>
);

StoryNav.propTypes = {
  active: PropTypes.oneOf(['home', 'submit', '']),
  title: PropTypes.string,
};

StoryNav.defaultProps = {
  active: '',
  title: '',
};

export default StoryNav;
