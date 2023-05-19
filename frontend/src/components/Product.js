import React from 'react'
import styled from 'styled-components';
import bronzeSwordImage from '../images/bronze_sword_pic.webp'


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
            {product.productName === "Bronze Sword" ? <Img src={bronzeSwordImage} alt='Picture of Bronze Sword'/> : ""}
        
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