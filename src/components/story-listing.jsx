import React from 'react';
import PropTypes from 'prop-types';
import Story from './story-listing-item';

const StoryListing = props => (
  <div>
    <div className="listing">
      {
        props.list.map(story => (
          <Story story={story} key={story.id} />
        ))
      }
    </div>
  </div>
);
// <Story story={story} onHide={props.onHide} key={story.id} />

StoryListing.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // onHide: PropTypes.func.isRequired,
};

export default StoryListing;
