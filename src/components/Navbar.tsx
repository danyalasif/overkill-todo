import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavList>
      <li>
        <NavLink href='#'>Todos</NavLink>
      </li>
      <li>
        <NavLink href='#'>Settings</NavLink>
      </li>
      <li>
        <NavLink href='#'>Profile</NavLink>
      </li>
      <li>
        <NavLink href='#'>Awesome</NavLink>
      </li>
    </NavList>
  )
}

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  justify-content: center;
`

const NavLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

export default Navbar
