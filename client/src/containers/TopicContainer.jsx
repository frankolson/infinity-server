// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Topic from '../components/Topic';
import { deleteTopic } from '../actions/topicsActions';
import { getCurrentTopic, clearCurrentTopic } from '../actions/currentTopicActions';
import { getTopicComments } from '../actions/topicCommentsActions';

const mapStateToProps = ({ currentTopic }, { topicId }) => ({
  topic: currentTopic,
  topicId,
})

const mapDispatchToProps = (dispatch) => ({
  clearCurrentTopic: data => dispatch(clearCurrentTopic(data)),
  deleteTopic: data => dispatch(deleteTopic(data)),
  getTopic: data => dispatch(getCurrentTopic(data)),
  getTopicComments: data => dispatch(getTopicComments(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Topic));
