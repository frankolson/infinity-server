// Vendor Assets
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Project Assets
import categories from './categoriesReducer';
import currentComment from './currentCommentReducer';
import currentTopic from './currentTopicReducer';
import topics from './topicsReducer';
import topicComments from './topicCommentsReducer';

export default combineReducers({
  categories,
  currentComment,
  currentTopic,
  topics,
  topicComments,
  routing: routerReducer
});
