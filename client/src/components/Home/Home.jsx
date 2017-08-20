// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Project Assets
import Topics from '../Topics';

class Home extends PureComponent {
  render() {
    const { categories, topics } = this.props;
    return (
      <div className="row">
        {categories.map(category => {
          const filteredTopics = topics.filter(t => t.category === category.name).splice(0, 5);
          return filteredTopics.length > 0
            ? <div key={category.name} className="col-sm-6 col-md-4 mb-2">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title text-center">
                      <h4>
                        {category.name}
                      </h4>
                    </div>
                    <div className="card-text">
                      <Topics topics={filteredTopics} />
                      <div className="text-center">
                        <Link to={`/categories/${category.name}`}>
                          See more...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            : null;
        })}
      </div>
    );
  }
}

export default Home;
