// Vendor Assets
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import CategoryContainer from '../../containers/CategoryContainer';
import CommentsContainer from '../../containers/CommentsContainer';
import Header from '../Header';
import HomeContainer from '../../containers/HomeContainer';
import TopicContainer from '../../containers/TopicContainer';
import TopicFormContainer from '../../containers/TopicFormContainer';
import './App.css';

const propTypes = {
  getCategories: PropTypes.func.isRequired,
  getTopics: PropTypes.func.isRequired,
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.loadEverything = this.loadEverything.bind(this);
  }

  loadEverything() {
    this.props.getCategories();
    this.props.getTopics();
  }

  render() {
    return (
      <div>
        <Route path="/" component={Header} />

        <div className="container">
          <Route exact path="/" render={() => {
            this.loadEverything();
            return <HomeContainer />;
          }} />
          <Route path="/topics/new" component={TopicFormContainer} />
          <Route path="/topics/edit/:topicId" render={({ match }) => (
            <div>
              <TopicFormContainer topicId={match.params.topicId} />
            </div>
          )} />
          <Route path="/topics/show/:topicId" render={({ match }) => (
            <div>
              <TopicContainer topicId={match.params.topicId} />
            </div>
          )} />
          <Route path="/categories/:category" render={({ match }) =>
            <CategoryContainer category={match.params.category} />
          } />
        </div>

        <Route path="/topics/show/:topicId" render={({ match }) => (
          <div>
            <CommentsContainer topicId={match.params.topicId} />
          </div>
        )} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
