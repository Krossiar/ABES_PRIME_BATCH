import React from 'react'
import {Link} from 'react-router'
const NotFound = () => {
  return (
    <div>
      <h2>Oops... Page not found!</h2>
      <a href="/">Home Anchor</a>
      <br />
      <Link to="/">Home Link</Link>
    </div>
  )
}

export default NotFound
