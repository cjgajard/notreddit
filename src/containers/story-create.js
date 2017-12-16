import { connect } from 'react-redux';
// import * as actions from '../actions';
import StoryForm from '../components/story-form';

const mapStateToProps = state => ({
  formData: state.stories.formData,
});

// const mapDispatchToProps = dispatch => ({
//   onSumbit: () => dispatch(actions.submitStory()),
//   // onChange: () => dispatch(actions.submitStory()),
// });

export default connect(mapStateToProps)(StoryForm);
