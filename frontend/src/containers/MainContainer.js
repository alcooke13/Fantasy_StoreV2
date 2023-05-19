import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';

function MainContainer() {
  return (
    <>
        <Header>
            <h1>Ali's Fantasy Shop</h1>
        </Header>
        <NavBar/>
    </>
  )
};
const Header = styled.header`
    font-size: 1.5rem;
    text-align: center;
    font-family: fantasy, sans-serif;
    padding: 0.2rem;
`


export default MainContainer;