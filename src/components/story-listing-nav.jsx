import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoryFormNav = props => (
  <ul className="nav">
    {
      props.title && (<li className="nav-item"><b>{props.title}</b></li>)
    }
    <li className="nav-item active">
      <Link to="/">news</Link>
    </li>
    <li className="nav-item">
      <Link to="/submit">submit</Link>
    </li>
  </ul>
);

StoryFormNav.propTypes = {
  // active: PropTypes.oneOf(['text', 'link']),
  title: PropTypes.string,
};

StoryFormNav.defaultProps = {
  // active: '',
  title: '',
};

export default StoryFormNav;
