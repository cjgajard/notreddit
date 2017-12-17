import React from 'react';
import PropTypes from 'prop-types';

const TextTitle = props => (
  <p className="title">{props.story.title}</p>
);

const LinkTitle = (props) => {
  const { domain } = props.story;
  const domainSpan = domain && (
    // <small className="domain">(<a href={`/?from=${domain}`}>{domain}</a>)</small>
    <small className="domain">({domain})</small>
  );

  return (
    <p className="title">
      <a href={props.story.url}>{props.story.title || props.story.url}</a>
      {domainSpan}
    </p>
  );
};

const Title = (props) => {
  const TitleKind = (props.story.url) ? LinkTitle : TextTitle;
  return (
    // <span className="rank">{props.rank}.</span>
    // upvotes here
    <TitleKind story={props.story} />
  );
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
