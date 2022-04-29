import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    <h1>This is my HomePage</h1>
      <p>
        <Link to="/album">album 1</Link>
      </p>
      <p>
        <Link to="/album">album 2</Link>
      </p>
  </div>
)

export { HomePage as default }
