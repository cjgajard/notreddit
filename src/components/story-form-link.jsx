import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './form-input';
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
            <FormInput
              label="story"
              name="title"
              onChange={this.handleChange}
              control={this.state.title}
            />
            <FormInput
              type="url"
              label="story"
              name="url"
              onChange={this.handleChange}
              control={this.state.url}
            />
            <FormInput
              label="story"
              name="username"
              onChange={this.handleChange}
              control={this.state.username}
            />
            <FormInput
              type="textarea"
              label="story"
              name="body"
              onChange={this.handleChange}
              control={this.state.body}
            />
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
