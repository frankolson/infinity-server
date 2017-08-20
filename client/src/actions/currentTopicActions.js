// Vendor Assets
import { routerActions } from 'react-router-redux';

// Project Assets
import * as actionTypes from '../constants/currentTopicConstants';
import * as api from '../utils/api';

export const getCurrentTopic = (topicId) => {
  return dispatch => api.getTopic(topicId)
    .then(topic => {
      dispatch({
        type: actionTypes.ADD_CURRENT_TOPIC,
        topic,
      });
    });
}

export const postTopic = (topic) => {
  return dispatch => api.postTopic(topic)
    .then(topic =>
      dispatch(clearCurrentTopic())
    )
    .then(() =>
      dispatch(routerActions.push(`/topics/show/${topic.id}`))
    );
}


export const putTopic = (topic) => {
  return dispatch => api.putTopic(topic)
    .then(topic =>
      dispatch(clearCurrentTopic())
    )
    .then(() =>
      dispatch(routerActions.push(`/topics/show/${topic.id}`))
    );
}

export const clearCurrentTopic = () => ({
  type: actionTypes.CLEAR_CURRENT_TOPIC
})

export const updateCurentTopicAuthor = (author) => ({
  type: actionTypes.UPDATE_CURRENT_TOPIC_AUTHOR,
  author,
})

export const updateCurentTopicBody = (body) => ({
  type: actionTypes.UPDATE_CURRENT_TOPIC_BODY,
  body,
})

export const updateCurentTopicCategory = (category) => ({
  type: actionTypes.UPDATE_CURRENT_TOPIC_CATEGORY,
  category,
})

export const updateCurentTopicTitle = (title) => ({
  type: actionTypes.UPDATE_CURRENT_TOPIC_TITLE,
  title,
})
