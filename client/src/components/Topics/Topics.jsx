// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import * as sort from '../../utils/sort';

const propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

class Topics extends PureComponent {
  render() {
    const { topics } = this.props;

    return(
      <ul className="list-unstyled">
        {sort.dateDescending(topics).map(topic =>
          <li key={topic.id}>
            <Link to={`/topics/show/${topic.id}`}>{topic.title}</Link> ~ <i>{topic.author}</i>
          </li>
        )}
      </ul>
    );
  }
}

Topics.propTypes = propTypes;

export default Topics;
