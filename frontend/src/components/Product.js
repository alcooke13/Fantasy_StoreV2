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
import lightArmorImage from '../images/light_armor.png'
import mediumArmorImage from '../images/medium_armor.png'
import heavyArmorImage from '../images/heavy_armor.png'
import genericWeaponImage from '../images/weapon_picture.jpeg'
import genericPotionImage from '../images/potion_pic.jpeg'
import genericArmourImage from '../images/armor_pic.png'


function Product({product, setChosenProduct, index, setView, view}) {
   const chooseProduct = () => {
    const selectedProduct = {
        index: index,
        productId: product.id,
        type: product.productType.typeName,
        name: product.productName,
        price: product.price,
        cost: product.cost,
        description: product.description
    }
        setChosenProduct(selectedProduct);
        // console.log(selectedProduct);
        setView("single");
   };

   const productName = product.productName.toLowerCase();
   const weaponNames = ["bronze sword", "silver sword", "gold sword", "bronze axe", "silver axe", "gold axe", "bronze spear", "gold spear"];
   const potionNames = ["health potion", "mana potion", "strength potion"];
   const armourNames = ["light armour", "light armor", "medium armor", "medium armour", "heavy armor", "heavy armour"];

   const productTypeName = product.productType.typeName.toLowerCase();

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

            {/* new / edited product input matches options and matches their product type  */}

            {productName === "bronze sword" && productTypeName === "weapons" ? <Img src={bronzeSwordImage} alt='Picture of Bronze Sword'/> : ""}
            {productName === "silver sword" && productTypeName === "weapons" ? <Img src={silverSwordImage} alt='Picture Silver Sword'/> : ""}
            {productName === "gold sword" && productTypeName === "weapons" ? <Img src={goldSwordImage} alt='Picture of Gold Sword'/> : ""}
            {productName === "bronze axe" && productTypeName === "weapons" ? <Img src={bronzeAxeImage} alt='Picture of Bronze Axe'/> : ""}
            {productName === "silver axe" && productTypeName === "weapons" ? <Img src={silverAxeImage} alt='Picture of Silver Axe'/> : ""}
            {productName === "gold axe" && productTypeName === "weapons" ? <Img src={goldAxeImage} alt='Picture of Gold Axe'/> : ""}
            {productName === "bronze spear" && productTypeName === "weapons" ? <Img src={bronzeSpearImage} alt='Picture of Bronze Spear'/> : ""}
            {productName === "silver spear" && productTypeName === "weapons" ? <Img src={silverSpearImage} alt='Picture of Silver Spear'/> : ""}
            {productName === "gold spear" && productTypeName === "weapons" ? <Img src={goldSpearImage} alt='Picture of Gold Spear'/> : ""}
            {productName === "mana potion" && productTypeName === "potions" ? <Img src={manaPotionImage} alt='Picture of mana potion'/> : ""}
            {productName === "health potion" && productTypeName === "potions" ? <Img src={healthPotionImage} alt='Picture of health potion'/> : ""}
            {productName === "strength potion" && productTypeName === "potions" ? <Img src={strengthPotionImage} alt='Picture of strength potion'/> : ""}
            {(productName === "light armour" || productName === "light armor") && productTypeName === "armor" ? <Img src={lightArmorImage} alt='Picture of light armour set'/> : ""}
            {(productName === "medium armour" || productName === "medium armor")&& productTypeName === "armor" ? <Img src={mediumArmorImage} alt='Picture of medium armour set'/> : ""}
            {(productName === "heavy armour" || productName === "heavy armor") && productTypeName === "armor" ? <Img src={heavyArmorImage} alt='Picture of heavy armour set'/> : ""}

        
            {/* product name does not match the options to display generic image based on the product type selected */}
            
            {!weaponNames.includes(productName) && productTypeName === "weapons" ? <Img src={genericWeaponImage} alt='generic weapon image' /> : ""}
            {!potionNames.includes(productName) && productTypeName === "potions" ? <Img src={genericPotionImage} alt='generic potion image' /> : ""}
            {!armourNames.includes(productName) && productTypeName === "armor" ? <Img src={genericArmourImage} alt='generic armour image' /> : ""}


        </BoxContainer>
    </Li> 
    </>
  )
};

const Li = styled.li`
    border: 5px solid #554545;
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