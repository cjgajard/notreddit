import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div>
        <h1>Submit</h1>
        <p className="small">
          <Link to="/">Back</Link>
        </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="story-title">
              Title<br />
              <input
                id="story-title"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="story-body">
              Body<br />
              <textarea
                id="story-body"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" disabled={this.props.sending} />
          </div>
        </form>
      </div>
    );
  }
};

StoryForm.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  sending: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

StoryForm.defaultProps = {
  sending: false,
};

export default StoryForm;
