import React from 'react';
import PropTypes from 'prop-types';
import StoryListingTitle from './story-listing-title';

// const UserLink = ({ user }) => (

// );

// UserLink.propTypes = {
//   user: PropTypes.shape({ username: PropTypes.string }),
// };

// UserLink.defaultProps = {
//   user: {},
// };

const StoryListingItem = props => (
  <div className="item">
    <p className="body" id={`story-${props.story.id}`}>
      {/* <span className="rank">{props.rank}.</span> */}
      {/* upvotes here */}
      <StoryListingTitle story={props.story} />
    </p>
    <p className="subtext">
      by {(!props.story.user) ? 'anonymous' : (
        <a href={`user?id=${props.story.user.username}`}>
          {props.story.user.username}
        </a>
      )}
      &nbsp;<a href={`story?id=${props.story.id}`}>3 hours ago</a>
      {/* <span className="separator">|</span> */}
      {/* <button onClick={props.onHide()}>hide</button> */}
      <span className="separator">|</span>
      <a href={`story?id=${props.story.id}`}>{props.story.commentsCount} comments</a>
    </p>
  </div>
);

StoryListingItem.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    domain: PropTypes.string,
    commentsCount: PropTypes.number,
    user: PropTypes.shape({ username: PropTypes.string }),
  }).isRequired,
  // onHide: PropTypes.func.isRequired,
};

export default StoryListingItem;
