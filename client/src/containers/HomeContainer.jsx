// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Home from '../components/Home';

const mapStateToProps = ({categories, topics}) => ({
  categories,
  topics: topics.filter((t) => t.deleted === false),
})

export default withRouter(connect(mapStateToProps, null)(Home));
