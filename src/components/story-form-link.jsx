import React from 'react';
import PropTypes from 'prop-types';

import StoryFormNav from './story-form-nav';

const StoryForm = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChange(this.state);
    this.props.onSubmit();
  }

  isValid() {
    return (this.state.username && this.state.url);
  }

  render() {
    return (
      <div>
        <StoryFormNav active="link" title="submit" />
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="story-title">
                Title<br />
                <input
                  id="story-title"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="story-username">
                Username<br />
                <input
                  id="story-username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="story-body">
                Link<br />
                <input
                  id="story-url"
                  type="url"
                  name="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                disabled={this.props.sending || !this.isValid()}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

StoryForm.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  sending: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

StoryForm.defaultProps = {
  sending: false,
};

export default StoryForm;
