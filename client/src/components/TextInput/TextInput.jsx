// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

class TextInput extends PureComponent {
  render() {
    const { label, placeholder, type, value } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={`#${label}`}>{label}</label>
        <input
          className="form-control"
          id="label"
          onChange={e => this.props.onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
