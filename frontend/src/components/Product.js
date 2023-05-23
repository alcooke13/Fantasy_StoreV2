import React, { useState } from 'react'
import styled from 'styled-components';
import bronzeSwordImage from '../images/bronze_sword_pic.webp'
import silverSwordImage from '../images/silver_sword_pic.jpeg'
import goldSwordImage from '../images/gold_sword_pic.jpeg'
import bronzeAxeImage from '../images/Bronze_axe_pic.webp'
import silverAxeImage from '../images/silver_axe_pic.webp'
import goldAxeImage from '../images/gold_axe_pic.webp'
import bronzeSpearImage from '../images/bronze_spear_pic.webp'
import silverSpearImage from '../images/silver_spear_pic.webp'
import goldSpearImage from '../images/gold_spear_pic.png'
import manaPotionImage from '../images/mana_potion_pic.png'
import healthPotionImage from '../images/health_potion_pic.png'
import strengthPotionImage from '../images/strength_potion_pic.png'
import lightArmorImage from '../images/light_armor_pic.png'
import mediumArmorImage from '../images/medium_armor_pic.png'
import heavyArmorImage from '../images/heavy_armor_pic.png'


function Product({product, setChosenProduct, chosenProduct, setView, view}) {
   const chooseProduct = () => {
    const newProduct = product.id - 1;
        setChosenProduct(newProduct);
        setView("single")

   };

    return (  
    <>
    <Li onClick={chooseProduct}>
        <BoxContainer>
            <h3>{product.productName}</h3>
            <div>
                Cost: {product.cost}
            </div>
            <div>
                Price: {product.price}
            </div>
            <div>
                Markup : {Math.round((product.price - product.cost) / product.cost * 100)}%
            </div>
            
            {view === "single" ? <div>{product.description}</div> : ""}

            {product.productName.toLowerCase() === "bronze sword" ? <Img src={bronzeSwordImage} alt='Picture of Bronze Sword'/> : ""}
            {product.productName.toLowerCase() === "silver sword" ? <Img src={silverSwordImage} alt='Picture Silver Sword'/> : ""}
            {product.productName.toLowerCase() === "gold sword" ? <Img src={goldSwordImage} alt='Picture of Gold Sword'/> : ""}
            {product.productName.toLowerCase() === "bronze axe" ? <Img src={bronzeAxeImage} alt='Picture of Bronze Axe'/> : ""}
            {product.productName.toLowerCase() === "silver axe" ? <Img src={silverAxeImage} alt='Picture of Silver Axe'/> : ""}
            {product.productName.toLowerCase() === "gold axe" ? <Img src={goldAxeImage} alt='Picture of Gold Axe'/> : ""}
            {product.productName.toLowerCase() === "bronze spear" ? <Img src={bronzeSpearImage} alt='Picture of Bronze Spear'/> : ""}
            {product.productName.toLowerCase() === "silver spear" ? <Img src={silverSpearImage} alt='Picture of Silver Spear'/> : ""}
            {product.productName.toLowerCase() === "gold spear" ? <Img src={goldSpearImage} alt='Picture of Gold Spear'/> : ""}
            {product.productName.toLowerCase() === "mana potion" ? <Img src={manaPotionImage} alt='Picture of mana potion'/> : ""}
            {product.productName.toLowerCase() === "health potion" ? <Img src={healthPotionImage} alt='Picture of health potion'/> : ""}
            {product.productName.toLowerCase() === "strength potion" ? <Img src={strengthPotionImage} alt='Picture of strength potion'/> : ""}
            {product.productName.toLowerCase() === "leather armor set" ? <Img src={lightArmorImage} alt='Picture of light armour set'/> : ""}
            {product.productName.toLowerCase() === "medium armour" ? <Img src={mediumArmorImage} alt='Picture of medium armour set'/> : ""}
            {product.productName.toLowerCase() === "heavy armour" ? <Img src={heavyArmorImage} alt='Picture of heavy armour set'/> : ""}
        
        </BoxContainer>
    </Li> 
    </>
  )
};

const Li = styled.li`
    border: 1px solid black;
    max-width: 210px;
    min-height: 240px;
    border-radius: 0.5em;
    list-style: none;
    padding: 1rem;
    margin: 5px;
    text-align: center;
`

const BoxContainer = styled.div`
`


const Img = styled.img`
    margin-top: 1.5rem;
    max-width: 125px;
    max-height: 125px;
`

export default Product;