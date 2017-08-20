// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const propTypes = {
  clearCurrentTopic: PropTypes.func.isRequired,
  deleteTopic: PropTypes.func.isRequired,
  getTopic: PropTypes.func.isRequired,
  topic: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    deleted: PropTypes.bool,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
  }),
  topicId: PropTypes.string.isRequired,
}

class Topic extends PureComponent {
  constructor(props) {
    super(props);

    this.deleteTopic = this.deleteTopic.bind(this);
  }

  componentDidMount() {
    this.props.getTopic(this.props.topicId);
    this.props.getTopicComments(this.props.topicId);
  }

  componentWillUnmount() {
    this.props.clearCurrentTopic();
  }

  deleteTopic() {
    this.props.deleteTopic(this.props.topic.id);
  }

  render() {
    if (this.props.topic) {
      const { author, body, id, timestamp, title } = this.props.topic;

      return (
        <div>
          <h1 className="topic-title mb-5">{title}</h1>

          <p className="topic-body mb-5">{body}</p>

          <div className="topic-info d-flex justify-content-between mb-3">
            <div>
              <div className="topic-author">{author}</div>
              <div className="topic-time-score text-secondary">
                {moment(timestamp).format('D MMM YYYY')}
              </div>
            </div>

            <div>
              <Link to={`/topics/edit/${id}`} className="btn btn-link text-secondary">
                Edit
              </Link>
              <button
                onClick={this.deleteTopic}
                style={{cursor: "pointer"}}
                className="btn btn-link text-secondary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return(null);
    }
  }
}

Topic.propTypes = propTypes;

export default Topic;
