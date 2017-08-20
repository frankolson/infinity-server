// Project Assets
import * as actionTypes from '../constants/currentTopicConstants';

const initialState = {
  author: '',
  body: '',
  category: '',
  deleted: false,
  id: null,
  timestamp: null,
  title: '',
  voteScore: null,
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_TOPIC:
      return action.topic
    case actionTypes.CLEAR_CURRENT_TOPIC:
      return initialState
    case actionTypes.UPDATE_CURRENT_TOPIC_AUTHOR:
      return {
        ...state,
        author: action.author,
      }
    case actionTypes.UPDATE_CURRENT_TOPIC_BODY:
      return {
        ...state,
        body: action.body,
      }
    case actionTypes.UPDATE_CURRENT_TOPIC_CATEGORY:
      return {
        ...state,
        category: action.category,
      }
    case actionTypes.UPDATE_CURRENT_TOPIC_TITLE:
      return {
        ...state,
        title: action.title,
      }
    default:
      return state;
  }
}
