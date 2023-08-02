// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
       <Link to="/step1">
        <button>Let's Start</button>
      </Link>
    </div>
  );
};

export default Landing;
