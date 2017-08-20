// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import App from '../components/App';
import { getCategories } from '../actions/categoriesActions';
import { getTopics } from '../actions/topicsActions';

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getTopics: () => dispatch(getTopics())
});

export default withRouter(connect(null, mapDispatchToProps)(App));
