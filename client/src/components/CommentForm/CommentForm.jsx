// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Project Assets
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';

const propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string,
    parentId: PropTypes.string,
    timestamp: PropTypes.number,
  }),
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  topicId: PropTypes.string.isRequired,
  updateCurentCommentAuthor: PropTypes.func.isRequired,
  updateCurentCommentBody: PropTypes.func.isRequired,
};

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      ...this.props.comment,
      id: uuid(),
      parentId: this.props.topicId,
      timestamp: new Date().getTime(),
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.handleUpdate({
      ...this.props.comment,
      parentId: this.props.comment.parentId,
      timestamp: new Date().getTime(),
    })
  }

  render() {
    const { author, body, id } = this.props.comment;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={id ? this.handleUpdate : this.handleSubmit}>
            <TextInput
              onChange={this.props.updateCurentCommentAuthor}
              label="Name"
              value={author}
            />

            <TextareaInput
              onChange={this.props.updateCurentCommentBody}
              label="Suggestion"
              value={body}
            />

            <button className="btn btn-outline-primary">
              {id ? 'Update' : 'Publish'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = propTypes;

export default CommentForm;
