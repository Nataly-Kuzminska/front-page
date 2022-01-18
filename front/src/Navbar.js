import React from 'react'
import styled from 'styled-components'
import logoCart from './Cart.svg'
import currency from './Currency.png'
import emptyCart from './emptyCart.png'

const Navbar = () => {
  return (
    <Nav>
      <Menu>
      <MenuLink href="">WOMEN</MenuLink>
      <MenuLink href="">MEN</MenuLink>
      <MenuLink href="">KIDS</MenuLink>
      <img src={logoCart} alt="cart"/>
      <img src={currency} alt="$"/>
      <img src={emptyCart} alt="emptycart"/>
      </Menu>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: blur;
  margin-bottom: 80px;
`;

const MenuLink = styled.a`
  padding: 32px 16px;
  cursor: pointer;
  text-align: center;
  color: #1D1F22;
  font-size: 16px;
  font-weight: 600;
`;

export default Navbar
