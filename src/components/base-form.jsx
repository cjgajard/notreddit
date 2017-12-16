import React from 'react';
import PropTypes from 'prop-types';

const BaseForm = class extends React.Component {
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
        <h1>New story</h1>
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

BaseForm.propTypes = {
  formData: PropTypes.shape({ title: PropTypes.string }).isRequired,
  // onChange: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
};

export default BaseForm;
