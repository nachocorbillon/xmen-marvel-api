import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import '../../../index.css';


  const Header = ({ location }) => {
  return (
    <header>
      <nav>
        <Link  to="/" id="linktohome">
          Home
        </Link>
        <Link   to="/readingorder" id="linktoreading">
          Complete Reading Order
        </Link>
        <Link   to="/minimal" className="dispensable">
          Minimal Reading Order
        </Link>
        <Link   to="/omnibus" className="dispensable">
          List of Omnibus
        </Link>
        <Link  to="/" id="mobilelinktohome">
          Chris Claremont's X-Men Run
        </Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object.isRequired
};

export default withRouter (Header);