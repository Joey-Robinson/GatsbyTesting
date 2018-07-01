import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#222'
    }}
  >
    <div
      style={{
        maxWidth: 960
      }}
    >
      <h1 style={{ margin: 0, color: 'white'}}>
        <Menu />
      </h1>
    </div>
  </div>
)

export default Header
