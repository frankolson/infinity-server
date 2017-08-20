// Project Assets
import * as api from '../utils/api';
import { getTopicComments } from './topicCommentsActions';

export const deleteComment = (comment) => {
  return dispatch => api.deleteComment(comment.id)
    .then(comment =>
      dispatch(getTopicComments(comment.parentId))
    );
}

export const upVoteComment = (comment) => {
  return dispatch => api.postCommentVote(comment.id, "upVote")
    .then(res =>
      dispatch(getTopicComments(comment.parentId))
    );
}

export const downVoteComment = (comment) => {
  return dispatch => api.postCommentVote(comment.id, "downVote")
    .then(res =>
      dispatch(getTopicComments(comment.parentId))
    );
}
