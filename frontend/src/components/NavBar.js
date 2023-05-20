import React from 'react'
import styled from 'styled-components';

function NavBar({view, setView}) {
  
  
  return (
        <Nav>
            <NavContainer>
                <li onClick = {() => setView("all")}>All Products</li>
                <li onClick = {() => setView("weapons")}>Weapons</li>
                <li onClick = {() => setView("potions")}>Potions</li>
                <li onClick = {() => setView("armours")}>Armour</li>
                <li onClick = {() => setView("new")}>New Product</li>
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
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: italic;
  color: white;

@media (max-width:900px) {
  display: flex;
  list-style: none;
  justify-content: space-between;
  font-size: 0.7em;
}
`


export default NavBar;