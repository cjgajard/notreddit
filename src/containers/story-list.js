import { connect } from 'react-redux';
// import * as actions from '../actions';
import StoryListing from '../components/story-listing';

const mapStateToProps = state => ({
  list: state.stories.list.data,
});

// const mapDispatchToProps = dispatch => ({
//   sumbit: () => dispatch(actions.submitStory()),
// });

export default connect(mapStateToProps)(StoryListing);
