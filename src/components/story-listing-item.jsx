import React from 'react';
import PropTypes from 'prop-types';
import timeAgo from 'node-time-ago';
import { Link } from 'react-router-dom';
import StoryListingTitle from './story-listing-title';

const StoryListingItem = props => (
  <div className="item" id={`story-${props.story.id}`}>
    <StoryListingTitle story={props.story} />
    <p className="subtext">
      by {(!props.story.username) ? 'anonymous' : props.story.username}
      &nbsp;
      <Link to={`story/${props.story.id}`}>
        {timeAgo(props.story.createdAt)}
      </Link>
      {/* <span className="hseparator">|</span> */}
      {/* <button onClick={props.onHide()}>hide</button> */}
      <span className="hseparator">|</span>
      <Link to={`story/${props.story.id}`}>
        {props.story.commentsCount} comments
      </Link>
    </p>
  </div>
);

StoryListingItem.propTypes = {
  story: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    commentsCount: PropTypes.number,
    domain: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  // onHide: PropTypes.func.isRequired,
};

export default StoryListingItem;
