import { connect } from 'react-redux';
import * as actions from '../actions/stories';
import StoryPage from '../components/story-page';

const mapStateToProps = state => ({
  story: state.stories.page.data,
});

const mapDispatchToProps = dispatch => ({
  fetchStory: id => dispatch(actions.fetchStory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
