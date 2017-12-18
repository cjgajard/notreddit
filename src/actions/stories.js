import { push } from 'react-router-redux';
import StoryService from '../services/story';

export const CHANGE_FORM = 'CHANGE_FORM';
export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_LOADING = 'FETCH_LIST_LOADING';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SENDING = 'SUBMIT_FORM_SENDING';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
// export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR'; // TODO


export const changeForm = data => ({
  type: CHANGE_FORM,
  data,
});

export const fetchListLoading = () => ({
  type: FETCH_LIST_LOADING,
});

export const fetchListSuccess = data => ({
  type: FETCH_LIST_SUCCESS,
  data,
});

export const fetchStorySuccess = data => ({
  type: FETCH_STORY_SUCCESS,
  data,
});

export const submitFormSending = () => ({
  type: SUBMIT_FORM_SENDING,
});

export const submitFormSuccess = data => ({
  type: SUBMIT_FORM_SUCCESS,
  data: [data],
});


export const fetchList = () => (dispatch) => {
  dispatch(fetchListLoading());
  StoryService.list().then((response) => {
    dispatch(fetchListSuccess(response.data));
  });
};

export const fetchStory = id => (dispatch) => {
  StoryService.find(id).then((response) => {
    dispatch(fetchStorySuccess(response.data));
  });
};

export const submitForm = () => (dispatch, getState) => {
  const state = getState();
  dispatch(submitFormSending());
  StoryService.create(state.stories.form.data).then((response) => {
    dispatch(submitFormSuccess(response.data));
    dispatch(push('/'));
  });
};
