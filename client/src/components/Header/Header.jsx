// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import logo from '../../logo.svg';
import './Header.css';

const propTypes = {
  history: PropTypes.object.isRequired
};

class Header extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="App-logo" alt="logo" /> Infinite Solution
          </Link>

          {this.props.history.location.pathname !== "/topic/new" &&
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse-links"
              aria-controls="navbar-collapse-links"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          }

          {this.props.history.location.pathname !== "/topic/new" &&
            <div className="collapse navbar-collapse" id="navbar-collapse-links">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/topics/new" className="nav-link">Submit a business problem +</Link>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
