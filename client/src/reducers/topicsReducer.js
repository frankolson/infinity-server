import * as actionTypes from '../constants/topicsConstants';

export default function reducer(state=[], action) {
  switch (action.type) {
    case actionTypes.ADD_TOPICS:
      return action.topics
    default:
      return state;
  }
}
