// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Project Assets
import './Comment.css'

const propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    parentId: PropTypes.string,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }),
  deleteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
};

class Comment extends PureComponent {
  render() {
    const { author, body, timestamp, voteScore } = this.props.comment;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-title inline-headers">
            <h4 className="mr-2">{author}</h4>
            <h6 className="text-secondary">
              {timestamp && moment(timestamp).format('D MMM YYYY')}
            </h6>
          </div>

          <p className="card-text">{body}</p>

          <h6 className="mt-2">
            <button
              onClick={() => this.props.upVoteComment(this.props.comment)}
              style={{cursor: "pointer"}}
              className="btn btn-link text-secondary"
            >
              <span className="fa fa-caret-up"></span>
            </button>

            <span className="text-muted">{`${voteScore} points`}</span>

            <div className="float-right">
              <button
                onClick={() => this.props.updateComment(this.props.comment)}
                style={{cursor: "pointer"}}
                className="btn btn-link text-secondary"
              >
                Edit
              </button>

              <button
                onClick={() => this.props.deleteComment(this.props.comment)}
                style={{cursor: "pointer"}}
                className="btn btn-link text-secondary"
              >
                Delete
              </button>
            </div>
          </h6>
        </div>
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
