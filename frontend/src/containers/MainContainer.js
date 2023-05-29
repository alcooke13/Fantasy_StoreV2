import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import ListContainer from './ListContainer';
import image from '../images/header2.jpg'
import { useEffect, useState } from "react";
import {getArmors, getPotions, getWeapons} from '../services/ProductTypeServices'
import { getProducts } from '../services/ProductServices';
import ModalComponent from '../components/Modal';


function MainContainer() {
  const [productData, setProductData] = useState([]);
  const [weaponsData, setWeaponsData] = useState([]);
  const [potionsData, setPotionsData] = useState([]);
  const [armoursData, setArmoursData] = useState([]);
  const [view, setView] = useState("all");
  const [filtered, setFiltered] = useState(false);
  const [show, setShow] = useState(false);

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

  }, [productData, weaponsData, potionsData, armoursData]);
  
  const changeViewAll = () => {
    setFiltered(false);
    setView("all");
  };

  const changeViewWeapons = () => {
    setFiltered(true);
    setView("weapons")
  };
  
  const changeViewPots =  () => {
    setFiltered(true);
    setView("potions")
  };

  const changeViewArmour =  () => {
    setFiltered(true);
    setView("armours")
  };

  return (
    <Main>
      <ModalComponent setShow={setShow} show={show} productData={productData}/>
        <Header>
            <H1>Ali's Fantasy Shop</H1>
        </Header>
        <NavBar setView = {setView} changeViewAll={changeViewAll} changeViewWeapons ={changeViewWeapons} changeViewPots = {changeViewPots} changeViewArmour = {changeViewArmour} setShow={setShow}/>
         <ListContainer allProducts = {productData} setView = {setView} view ={view} weaponsData = {weaponsData} potionsData = {potionsData} armoursData ={armoursData} filtered={filtered} changeViewAll={changeViewAll} changeViewWeapons ={changeViewWeapons} changeViewPots = {changeViewPots} changeViewArmour = {changeViewArmour} show={show} setShow={setShow}/>
    </Main>
  );
};
const Header = styled.header`
    display: flex;
    font-family: fantasy, sans-serif;
    justify-content: center;
    background-image: url(${image});
    background-size: cover;
    margin: 0;
    max-width: 100%;
    
`

const Main = styled.div`
  position: relative;
  min-height: 100vh;

`
const H1 = styled.h1`
  margin: 0;
  padding: 20px;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`

export default MainContainer;