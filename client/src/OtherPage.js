import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      This is another page!
      <Link to="/">Go back home</Link>
    </div>
  )
}