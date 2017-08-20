// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';

// Project Assets
import Comment from '../Comment';
import CommentFormContainer from '../../containers/CommentFormContainer';
import * as sort from '../../utils/sort';

const propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  setCurrentComment: PropTypes.func.isRequired,
  topicId: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
}

class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.beginUpdate = this.beginUpdate.bind(this);
  }

  beginUpdate(comment) {
    this.props.setCurrentComment(comment);
    scrollToElement('.comments-section', {
      offset: -100,
      duration: 500,
    });
  }

  render() {
    const { comments } = this.props;

    const renderedComments = sort.scoreDescending(comments).map(comment =>
      <Comment
        key={comment.id}
        comment={comment}
        deleteComment={this.props.deleteComment}
        downVoteComment={this.props.downVoteComment}
        updateComment={this.beginUpdate}
        upVoteComment={this.props.upVoteComment}
      />
    );

    return (
      <div className="comments-section pt-4">
        <div className="container container-small">
          <CommentFormContainer
            topicId={this.props.topicId}
            htmlId="comment-form"
          />

          {(comments.length > 0)
            ? renderedComments
            : <p className="text-center">
                There are no suggestions yet, you could be the first!
              </p>
          }
        </div>
      </div>
    );
  }
}

Comments.propTypes = propTypes;

export default Comments;
