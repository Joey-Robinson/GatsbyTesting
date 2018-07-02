import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div className="Menu">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
)

export default Menu