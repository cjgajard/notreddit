import update from 'immutability-helper';
import * as actions from '../actions/stories';

const initialState = {
  list: {
    data: [],
    loading: true,
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
  page: {
    data: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return update(state, {
        form: { data: { $set: action.data } },
      });
    case actions.FETCH_LIST_LOADING:
      return update(state, {
        list: { loading: { $set: true } },
      });
    case actions.FETCH_LIST_SUCCESS:
      return update(state, {
        list: {
          data: { $set: action.data },
          loading: { $set: false },
        },
      });
    case actions.FETCH_STORY_SUCCESS:
      return update(state, {
        page: {
          data: { $set: action.data },
        },
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
      });
    default:
      return state;
  }
};

export default reducer;
