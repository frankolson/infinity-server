// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import TopicForm from '../components/TopicForm';
import * as currentTopicActions from '../actions/currentTopicActions';
import { getCurrentTopic } from '../actions/currentTopicActions';

const mapStateToProps = ({ categories, currentTopic }, { topicId }) => ({
  categories,
  topic: currentTopic,
  topicId,
})

const mapDispatchToProps = (dispatch) => ({
  getTopic: data => dispatch(getCurrentTopic(data)),
  handleSubmit: data =>dispatch(currentTopicActions.postTopic(data)),
  handleUpdate: data =>dispatch(currentTopicActions.putTopic(data)),
  updateCurentTopicTitle: data => dispatch(currentTopicActions.updateCurentTopicTitle(data)),
  updateCurentTopicAuthor: data => dispatch(currentTopicActions.updateCurentTopicAuthor(data)),
  updateCurentTopicCategory: data => dispatch(currentTopicActions.updateCurentTopicCategory(data)),
  updateCurentTopicBody: data => dispatch(currentTopicActions.updateCurentTopicBody(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicForm));
