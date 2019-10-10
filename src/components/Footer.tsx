import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <footer>
      <NavList>
        <li>
          <NavLink href='#'>
            {' '}
            Spun by hand{' '}
            <span role='img' aria-label='hand-throw'>
              🙌
            </span>
            , with love{' '}
            <span role='img' aria-label='hearts'>
              ❤💕💖
            </span>
          </NavLink>
        </li>
      </NavList>
    </footer>
  )
}

const NavList = styled.ul`
  display: flex;
  align-self: flex-end;
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

export default Footer
