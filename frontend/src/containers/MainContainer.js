import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import ListContainer from './ListContainer';
import image from '../images/potions_header.png'
import { useEffect, useState } from "react";
import {getArmors, getPotions, getProductTypes, getWeapons} from '../services/ProductTypeServices'
import { getProducts } from '../services/ProductServices';


function MainContainer() {
  const [productData, setProductData] = useState([]);
  const [weaponsData, setWeaponsData] = useState([]);
  const [potionsData, setPotionsData] = useState([]);
  const [armoursData, setArmoursData] = useState([]);
  const [view, setView] = useState("all");
  useEffect(() => {
  
    const gettingProductTypes = async () => {
      const allProductTypes = await getProducts();
      const onlyWeaponTypes = await getWeapons();
      const onlyPotions = await getPotions();
      const onlyArmour = await getArmors();

      setProductData(allProductTypes);
      setWeaponsData(onlyWeaponTypes.products);
      setPotionsData(onlyPotions.products);
      setArmoursData(onlyArmour.products);

    }
  
    gettingProductTypes();

  }, []);
  
  
  return (
    <Main>
        <Header>
            <h1>Ali's Fantasy Shop</h1>
        </Header>
        <NavBar setView = {setView} view ={view}/>
         <ListContainer allProducts = {productData} setView = {setView} view ={view} weaponsData = {weaponsData} potionsData = {potionsData} armoursData ={armoursData}/>
    </Main>
  )
};
const Header = styled.header`
    font-size: 1.5rem;
    display: flex;
    font-family: fantasy, sans-serif;
    justify-content: center;
    background-image: url(${image});
    color: black;
    margin: 0;
    max-width: 100%;
`

const Main = styled.div`
  position: relative;
  min-height: 100vh;

`


export default MainContainer;