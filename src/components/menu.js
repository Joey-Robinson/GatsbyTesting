import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div className="Menu">
    <Link className="Menu-One" to="/">Home</Link>
    <Link className="Menu-Two" to="/about">About</Link>
    <Link className="Menu-Three" to="/skills">Skills</Link>
    <Link className="Menu-Four" to="/blog">Blog</Link>
    <Link className="Menu-Five" to="/contact">Contact</Link>
    <Link className="Menu-Six" to="/resume">Resume</Link>
  </div>
)

export default Menu