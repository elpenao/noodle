import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/" >Noodle is Cool</Link>
        </h1>
      </div>
    </div>
  );
}

export default Header;
