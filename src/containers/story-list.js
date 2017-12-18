import { connect } from 'react-redux';
import * as actions from '../actions/stories';
import StoryListing from '../components/story-listing';

const mapStateToProps = state => ({
  list: state.stories.list.data,
  loading: state.stories.list.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(actions.fetchList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryListing);
