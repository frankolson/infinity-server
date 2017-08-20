// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
};

const defaultProps = {
  placeholder: '',
  rows: 5,
  value: '',
};

class TextareaInput extends PureComponent {
  render() {
    const { rows, label, placeholder, value } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={`#${label}`}>{label}</label>
        <textarea
          className="form-control"
          id={label}
          rows={rows}
          onChange={e => this.props.onChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}

TextareaInput.propTypes = propTypes;
TextareaInput.defaultProps = defaultProps;

export default TextareaInput;
