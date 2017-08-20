import * as actionTypes from '../constants/currentCommentConstants';
import * as api from '../utils/api';
import * as postCommentsActions from './topicCommentsActions';

export const getCurrentComment = (commentId) => {
  return dispatch => api.getComment(commentId)
    .then(comment => {
      dispatch({
        type: actionTypes.ADD_CURRENT_COMMENT,
        comment,
      });
    });
}

export const postComment = (comment) => {
  return dispatch => api.postComment(comment)
    .then((comment) => {
      dispatch(postCommentsActions.getTopicComments(comment.parentId));
      dispatch(clearCurrentComment());
    });
}

export const setCurrentComment = (comment) => ({
  type: actionTypes.ADD_CURRENT_COMMENT,
  comment
})

export const updateComment = (comment) => {
  return dispatch => api.putComment(comment)
    .then((comment) => {
      dispatch(postCommentsActions.getTopicComments(comment.parentId));
      dispatch(clearCurrentComment());
    });
}

export const clearCurrentComment = () => ({
  type: actionTypes.CLEAR_CURRENT_COMMENT
})

export const updateCurentCommentAuthor = (author) => ({
  type: actionTypes.UPDATE_CURRENT_COMMENT_AUTHOR,
  author,
})

export const updateCurentCommentBody = (body) => ({
  type: actionTypes.UPDATE_CURRENT_COMMENT_BODY,
  body,
})
