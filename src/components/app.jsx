import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

import StoryList from '../containers/story-list';
import StoryCreateText from '../containers/story-create-text';
import StoryCreateLink from '../containers/story-create-link';

import '../stylesheets/main.scss';

const ConnectedSwitch = connect(state => ({
  location: state.location,
}))(Switch);

const App = () => (
  <div className="container">
    <div className="main">
      <ConnectedSwitch>
        <Route exact path="/" component={StoryList} />
        <Redirect exact from="/submit" to="/submit/text" />
        <Route path="/submit/link" component={StoryCreateLink} />
        <Route path="/submit/text" component={StoryCreateText} />
      </ConnectedSwitch>
    </div>
  </div>
);

export default App;
