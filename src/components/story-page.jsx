import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import StoryNav from './story-nav';

const StoryPage = class extends React.Component {
  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    // TODO handle bad id
    this.props.fetchStory(id);
  }

  render() {
    return (
      <div >
        <StoryNav title="notreddit" />
        <div className="container vcontainer">
          <div className="well">
            <p>
              <b>
                {this.props.story.title}
              </b>
            </p>
            <p>
              {this.props.story.body}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

// <Story story={story} onHide={props.onHide} key={story.id} />

StoryPage.propTypes = {
  fetchStory: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired, // eslint-disable-line react/no-typos
  story: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default StoryPage;
