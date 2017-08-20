import * as actionTypes from '../constants/topicCommentsConstants';
import * as api from '../utils/api';

export const getTopicComments = (topicId) => {
  return dispatch => api.getTopicComments(topicId)
    .then(comments => {
      dispatch({
        type: actionTypes.ADD_TOPIC_COMMENTS,
        comments,
      });
    });
}
