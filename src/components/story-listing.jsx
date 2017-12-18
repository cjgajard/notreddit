import React from 'react';
import PropTypes from 'prop-types';
import Story from './story-listing-item';
import StoryNav from './story-nav';

const StoryListing = class extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <div>
        <StoryNav title="notreddit" />
        <div className="listing">
          {
            this.props.list.map(story => (
              <Story story={story} key={story.id} />
            ))
          }
          {
            !this.props.loading && !this.props.list.length && (
              <div className="item">
                <p>
                  No stories yet, be the first to publish your content! ヾ(๑꧆◡꧆๑)ノ
                </p>
              </div>
            )
          }
          {
            this.props.loading && (
              <div className={`item loading ${this.props.loading ? '' : 'hidden'}`}>
                <p>
                  Loading ・゜(。┰ω┰。).・゜
                </p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
};

// <Story story={story} onHide={props.onHide} key={story.id} />

StoryListing.propTypes = {
  fetchList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool,
  // onHide: PropTypes.func.isRequired,
};

StoryListing.defaultProps = {
  loading: true,
};

export default StoryListing;
