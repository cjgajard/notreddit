import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../services/helpers';

const Input = props => (
  <input
    id={`${props.label}-${props.name}`}
    type={props.type}
    name={props.name}
    value={props.control}
    onChange={props.onChange}
    className="form-control"
  />
);

const TextArea = props => (
  <textarea
    id={`${props.label}-${props.name}`}
    name={props.name}
    value={props.control}
    onChange={props.onChange}
    className="form-control"
  />
);

const FormInput = (props) => {
  let InputComponent;
  switch (props.type) {
    case 'textarea':
      InputComponent = TextArea;
      break;
    default:
      InputComponent = Input;
  }

  return (
    <div className="form-group">
      <label htmlFor={`story-${props.name}`}>
        {capitalize(props.name)}<br />
        <InputComponent
          label={props.label}
          name={props.name}
          onChange={props.onChange}
          control={props.control}
        />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.oneOf(['text', 'url', 'textarea']),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  control: PropTypes.string.isRequired,
};

Input.propTypes = FormInput.propTypes;
TextArea.propTypes = FormInput.propTypes;

FormInput.defaultProps = {
  type: 'text',
};

Input.defaultProps = {
  type: 'text',
};

TextArea.defaultProps = {
  type: 'textarea',
};

export default FormInput;
