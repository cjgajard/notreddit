import React from 'react';
import PropTypes from 'prop-types';
import timeAgo from 'node-time-ago';
import StoryListingTitle from './story-listing-title';

const StoryListingItem = props => (
  <div className="item" id={`story-${props.story.id}`}>
    <StoryListingTitle story={props.story} />
    <p className="subtext">
      by {(!props.story.username) ? 'anonymous' : (
        <a href={`user?id=${props.story.username}`}>{props.story.username}</a>
      )}
      &nbsp;<a href={`story?id=${props.story.id}`}>{timeAgo(props.story.createdAt)}</a>
      {/* <span className="hseparator">|</span> */}
      {/* <button onClick={props.onHide()}>hide</button> */}
      <span className="hseparator">|</span>
      <a href={`story?id=${props.story.id}`}>{props.story.commentsCount} comments</a>
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
