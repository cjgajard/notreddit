import React from 'react';
import PropTypes from 'prop-types';

const TextTitle = props => (
  <span className="title">{props.story.title}</span>
);

const LinkTitle = (props) => {
  const { domain } = props.story;
  const domainSpan = domain && (
    // <small className="domain">(<a href={`/?from=${domain}`}>{domain}</a>)</small>
    <small className="domain">({domain})</small>
  );

  return (
    <span className="title">
      <a href={props.story.url}>{props.story.title}</a>
      {domainSpan}
    </span>
  );
};

const Title = (props) => {
  if (props.story.url) {
    return (<LinkTitle story={props.story} />);
  }
  return (<TextTitle story={props.story} />);
};

const storyTypes = {
  story: PropTypes.shape({
    url: PropTypes.string,
    domain: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

TextTitle.propTypes = storyTypes;
LinkTitle.propTypes = storyTypes;
Title.propTypes = storyTypes;

export default Title;
