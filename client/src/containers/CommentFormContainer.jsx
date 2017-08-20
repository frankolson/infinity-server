// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import CommentForm from '../components/CommentForm';
import * as currentCommentActions from '../actions/currentCommentActions';

const mapStateToProps = ({ categories, currentComment }, { topicId }) => ({
  comment: currentComment,
  topicId,
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: data =>dispatch(currentCommentActions.postComment(data)),
  handleUpdate: data =>dispatch(currentCommentActions.updateComment(data)),
  updateCurentCommentAuthor: data => dispatch(currentCommentActions.updateCurentCommentAuthor(data)),
  updateCurentCommentBody: data => dispatch(currentCommentActions.updateCurentCommentBody(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
