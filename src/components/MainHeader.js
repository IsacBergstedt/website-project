import React from 'react';

function MainHeader({title, description}) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;