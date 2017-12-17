import React from 'react';
import PropTypes from 'prop-types';
import Story from './story-listing-item';
import StoryListingNav from './story-listing-nav';

const StoryListing = props => (
  <div>
    <StoryListingNav title="notreddit" />
    <div className="listing">
      {
        props.list.map(story => (
          <Story story={story} key={story.id} />
        ))
      }
      {
        !props.list.length && (
          <div className="item">
            <p>
              No stories yet, be the first to publish your content! ヾ(๑꧆◡꧆๑)ノ
            </p>
          </div>
        )
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
