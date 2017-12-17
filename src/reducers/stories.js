import update from 'immutability-helper';
import * as actions from '../actions/stories';
// import { STORIES_MOCK } from '../services/mocks';

const initialState = {
  list: {
    data: [],
  },
  form: {
    data: {
      title: '',
      username: '',
      body: '',
      url: '',
    },
    sending: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return update(state, {
        form: { data: { $set: action.data } },
      });
    case actions.SUBMIT_FORM_SENDING:
      return update(state, {
        form: { sending: { $set: true } },
      });
    case actions.SUBMIT_FORM_SUCCESS:
      return update(state, {
        form: {
          data: { $set: initialState.form.data },
          sending: { $set: false },
        },
        list: { data: { $unshift: action.data } },
      });
    default:
      return state;
  }
};

export default reducer;
