import * as actionTypes from '../constants/topicCommentsConstants';

export default function reducer(state=[], action) {
  switch (action.type) {
    case actionTypes.ADD_TOPIC_COMMENTS:
      return action.comments
    default:
      return state;
  }
}
