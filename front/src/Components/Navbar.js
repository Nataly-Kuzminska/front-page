import React from 'react'
import styled from 'styled-components'
import logoCart from '../image/Cart.svg'
import currency from '../image/Currency.png'
import emptyCart from '../image/emptyCart.png'

class Navbar extends React.Component {
  render() {
    return (
      <NavBarStyled>
        <Menu>
        <MenuLink href="">WOMEN</MenuLink>
        <MenuLink href="">MEN</MenuLink>
        <MenuLink href="">KIDS</MenuLink>
        </Menu> 
        <CartButton></CartButton>
        <img src={currency} alt="$"/>
        <img src={emptyCart} alt="emptycart"/>
        
     </NavBarStyled>
  );
 }
}

const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: white;
`;

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0; 
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #FFFFFF;
  color: #1D1F22;
`;

const Menu = styled.div`
  left: 0;
  top: 0;
  height: 80px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

const MenuLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1D1F22;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  margin: 0;
  transition: all 0.3s case-in;

  &:hover {
    color: #5ECE7B;
    text-decoration: underline #5ECE7B; 
  }
`;




export default Navbar;
