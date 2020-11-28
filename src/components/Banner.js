import React from 'react';
import { Link } from 'react-router-dom';
import './style/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <a className="link" href="http://www.anismansour.com">
        {' '}
        Anis Mansour Profile{' '}
      </a>
    </div>
  );
}

export default Banner;
