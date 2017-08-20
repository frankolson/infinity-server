// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Comments from '../components/Comments';
import { deleteComment, downVoteComment, upVoteComment } from '../actions/commentActions';
import { setCurrentComment } from '../actions/currentCommentActions';

const mapStateToProps = ({ topicComments, currentTopic }, { topicId }) => ({
  comments: topicComments,
  topicId,
})

const mapDispatchToProps = (dispatch) =>({
  deleteComment: (data) => dispatch(deleteComment(data)),
  downVoteComment: (data) => dispatch(downVoteComment(data)),
  setCurrentComment: (data) => dispatch(setCurrentComment(data)),
  upVoteComment: (data) => dispatch(upVoteComment(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
