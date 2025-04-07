import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default function Header() {
  return (
    <header>
      <div className="left">
        <h1>Book storage</h1>
      </div>
      <div className="right">
        <Link to={'/exam9/home'}>Home</Link>
        <Link to={'/exam9/book-gallery'}>Book Gallery</Link>
      </div>
    </header>
  )
}
