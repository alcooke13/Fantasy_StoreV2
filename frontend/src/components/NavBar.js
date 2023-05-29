import React from 'react'
import styled from 'styled-components';

function NavBar({setView, changeViewAll, changeViewWeapons, changeViewPots, changeViewArmour, setShow}) {
  
  
  return (
        <Nav>
            <NavContainer>
                <Li onClick = {changeViewAll} className='nav-bar'>All Products</Li>
                <Li onClick = {changeViewWeapons} className='nav-bar'>Weapons</Li>
                <Li onClick = {changeViewPots} className='nav-bar'>Potions</Li>
                <Li onClick = {changeViewArmour} className='nav-bar'>Armour</Li>
                <Li onClick = {() => setView("new")} className='nav-bar'>New Product</Li>
                <Li onClick={() => setShow(true)} className='nav-bar'>Stock</Li>
            </NavContainer>
        </Nav>
  )
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: rgb(9, 9, 78);
  padding:25px;
`

const NavContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  

@media (max-width:900px) {
  display: flex;
  list-style: none;
  justify-content: space-between;
  font-size: 0.7em;
}
`

const Li = styled.button`
  background-color: rgb(9, 9, 78);
  border: none;
  min-height: 40px;
  min-width: 100px;
  border-radius: 0.3em;

  @media (max-width:900px) {
  font-size: 1em;
  min-width: max-content;
}
  cursor: pointer;
  &:hover {
   background-color:hsl(249, 85%, 60%);
  }
  
`


export default NavBar;