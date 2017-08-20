// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Category from '../components/Category';

const mapStateToProps = ({ topics }, { category }) => ({
  category: category,
  topics: topics.filter(t => (t.category === category) && (t.deleted === false))
})

export default withRouter(connect(mapStateToProps, null)(Category));
