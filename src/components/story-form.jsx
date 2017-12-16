import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoryForm = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.formData;

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  //   this.props.onChange();
  // }
  //
  // handleSubmit() {
  //   this.props.onSubmit();
  // }

  render() {
    return (
      <div>
        <h1>Submit</h1>
        <p className="small">
          <Link href="/">Back</Link>
        </p>
        <div>
          <label htmlFor="story-title">
            Title<br />
            <input id="story-title" type="text" value={this.state.title} />
          </label>
        </div>
        <div>
          <label htmlFor="story-body">
            Body<br />
            <textarea id="story-body" value={this.state.body} />
          </label>
        </div>
      </div>
    );
  }
};

StoryForm.propTypes = {
  formData: PropTypes.shape({ title: PropTypes.string }).isRequired,
  // onChange: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};

export default StoryForm;
