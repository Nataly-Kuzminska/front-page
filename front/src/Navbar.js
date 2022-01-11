import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>
      <Menu>
      <MenuLink href="">WOMEN</MenuLink>
      <MenuLink href="">MEN</MenuLink>
      <MenuLink href="">KIDS</MenuLink>
      </Menu>
    </Nav>
  )
}

const Nav = styled.div`

`;

const Menu = styled.div`

`;

const MenuLink = styled.a`

`;

export default Navbar
