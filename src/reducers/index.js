import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import storiesReducer from './stories';

export default combineReducers({
  stories: storiesReducer,
  router: routerReducer,
});
