// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
  <h1>About Page</h1>
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );

};

export default About;