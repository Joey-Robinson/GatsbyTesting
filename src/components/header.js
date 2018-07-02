import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu';

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Menu />
      </h1>
    </div>
  </div>
)

export default Header
