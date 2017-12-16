import React from 'react';
import { Route } from 'react-router-dom';
import StoryList from '../containers/story-list';
import StoryCreate from '../containers/story-create';

import '../stylesheets/main.scss';

const App = () => (
  <div className="container">
    <div className="main">
      <Route exact path="/" component={StoryList} />
      <Route path="/submit" component={StoryCreate} />
    </div>
  </div>
);

export default App;
