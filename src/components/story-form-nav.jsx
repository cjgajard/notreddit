import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoryFormNav = props => (
  <ul className="nav">
    {
      props.title && (<li className="nav-item"><b>{props.title}</b></li>)
    }
    <li className="nav-skip">
      <Link to="/">back</Link>
    </li>
    <li className={`nav-item  ${(props.active === 'text') ? 'active' : ''}`}>
      <Link to="/submit/text">text</Link>
    </li>
    <li className={`nav-item ${(props.active === 'link') ? 'active' : ''}`}>
      <Link to="/submit/link">link</Link>
    </li>
  </ul>
);

StoryFormNav.propTypes = {
  active: PropTypes.oneOf(['text', 'link']),
  title: PropTypes.string,
};

StoryFormNav.defaultProps = {
  active: 'text',
  title: '',
};

export default StoryFormNav;
