// Vendor Assets
import { routerActions } from 'react-router-redux';

// Project Assets
import * as actionTypes from '../constants/topicsConstants';
import * as api from '../utils/api';

export const deleteTopic = (topicId) => {
  return dispatch => api.deleteTopic(topicId)
    .then(topic =>
      dispatch(routerActions.push(`/`))
    );
}

export const getTopics = () => {
  return dispatch => api.getTopics()
    .then(topics => {
      dispatch({
        type: actionTypes.ADD_TOPICS,
        topics,
      });
    });
}
