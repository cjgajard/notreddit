import { push } from 'react-router-redux';
import StoryService from '../services/story';

export const CHANGE_FORM = 'CHANGE_FORM';

export const SUBMIT_FORM = 'SUBMIT_FORM';
// export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR'; // TODO
export const SUBMIT_FORM_SENDING = 'SUBMIT_FORM_SENDING';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';


export const changeForm = data => ({
  type: CHANGE_FORM,
  data,
});


export const submitFormSending = () => ({
  type: SUBMIT_FORM_SENDING,
});

export const submitFormSuccess = data => ({
  type: SUBMIT_FORM_SUCCESS,
  data: [data],
});

export const submitForm = () => (dispatch, getState) => {
  const state = getState();
  dispatch(submitFormSending());
  setTimeout(() => {
    StoryService.create(state.stories.form.data).then((response) => {
      dispatch(push('/'));
      dispatch(submitFormSuccess(response.data));
    });
  }, 1000);
};
