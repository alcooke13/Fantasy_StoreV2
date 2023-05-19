import React from 'react'
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


function Product({product}) {
  
    return (  
    <Li>
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
            {product.productName.toLowerCase() === "bronze sword" ? <Img src={bronzeSwordImage} alt='Picture of Bronze Sword'/> : ""}
            {product.productName.toLowerCase() === "silver sword" ? <Img src={silverSwordImage} alt='Picture Silver Sword'/> : ""}
            {product.productName.toLowerCase() === "gold sword" ? <Img src={goldSwordImage} alt='Picture of Gold Sword'/> : ""}
            {product.productName.toLowerCase() === "bronze axe" ? <Img src={bronzeAxeImage} alt='Picture of Bronze Axe'/> : ""}
            {product.productName.toLowerCase() === "silver axe" ? <Img src={silverAxeImage} alt='Picture of Silver Axe'/> : ""}
            {product.productName.toLowerCase() === "gold axe" ? <Img src={goldAxeImage} alt='Picture of Gold Axe'/> : ""}
            {product.productName.toLowerCase() === "bronze spear" ? <Img src={bronzeSpearImage} alt='Picture of Bronze Spear'/> : ""}
            {product.productName.toLowerCase() === "silver spear" ? <Img src={silverSpearImage} alt='Picture of Silver Spear'/> : ""}
            {product.productName.toLowerCase() === "gold spear" ? <Img src={goldSpearImage} alt='Picture of Gold Spear'/> : ""}
        
        </BoxContainer>
    </Li>
  )
};

const Li = styled.li`
    border: 1px solid black;
    max-width: 100px;
    min-height: 100px;
    border-radius: 0.5em;
    list-style: none;
    padding: 1rem;
    margin: 5px;
    text-align: center;
`

const BoxContainer = styled.div`
`


const Img = styled.img`
    max-width: 100px;
    max-height: 100px;
`

export default Product;