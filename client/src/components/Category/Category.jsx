// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import Topics from '../Topics';

const propTypes = {
  category: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
};

class Category extends PureComponent {
  render() {
    const { category, topics } = this.props;
    return (
      <div>
        <div>
          <h1>{category}</h1>
        </div>

        <Topics topics={topics} />
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default Category;
