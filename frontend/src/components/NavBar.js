import React from 'react'
import styled from 'styled-components';

function NavBar({view, setView}) {
  
  
  return (
        <Nav>
            <NavContainer>
                <Li onClick = {() => setView("all")}>All Products</Li>
                <Li onClick = {() => setView("weapons")}>Weapons</Li>
                <Li onClick = {() => setView("potions")}>Potions</Li>
                <Li onClick = {() => setView("armours")}>Armour</Li>
                <Li onClick = {() => setView("new")}>New Product</Li>
            </NavContainer>
        </Nav>
  )
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: hsl(240, 40%, 65%);
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
  background-color: hsl(240, 40%, 65%);
  border: none;
  min-height: 40px;
  min-width: 100px;
  border-radius: 0.3em;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: italic;
  color: white;


  @media (max-width:900px) {
  font-size: 1em;
  min-width: max-content;
}
  cursor: pointer;
  &:hover {
    background-color: hsl(240, 40%, 70%);
  }
  
`


export default NavBar;