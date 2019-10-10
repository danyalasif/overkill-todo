import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Main from './Main'
import styled from 'styled-components'

const Layout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main />
      <Footer />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: grid;
`

export default Layout
