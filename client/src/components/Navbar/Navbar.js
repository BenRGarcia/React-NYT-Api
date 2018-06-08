import React from 'react';
import { Link } from "react-router-dom";

const linkCSSClass = path => (
  window.location.pathname === path
    ? 'nav-link active'
    : 'nav-link'
);

export const Navbar = () => {
  return (
    <nav className='nav nav-pills justify-content-center'>
      <Link
        to='/'
        className={linkCSSClass("/")}
      >
        Search Articles
      </Link>
      <Link
        to='/saved'
        className={linkCSSClass("/saved")}
      >
        Saved Articles
      </Link>
    </nav>
  );
};
