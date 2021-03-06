import { connect } from 'react-redux';
import * as actions from '../actions/stories';
import StoryForm from '../components/story-form-link';

const mapStateToProps = state => ({
  data: state.stories.form.data,
  sending: state.stories.form.sending,
});

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(actions.changeForm(data)),
  onSubmit: () => dispatch(actions.submitForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
