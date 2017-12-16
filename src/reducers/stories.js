import * as actions from '../actions';
import { STORIES_MOCK } from './mocks';

const initialState = {
  list: STORIES_MOCK,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + action.amount,
      });
    case actions.RESET_COUNTER:
      return Object.assign({}, state, {
        counter: action.amount,
      });
    default:
      return state;
  }
};

export default reducer;
