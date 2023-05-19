import React from 'react'
import styled from 'styled-components'
import Product from '../components/Product';

function ListContainer({allProducts}) {
    const productList = allProducts.map((product, index) => {
        return <Product key={index} product = {product}/>
    })
    
    
    return (
            <ProductContainer>
                {productList}
            </ProductContainer>
  )
};

const ProductContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-left: 5%;
    margin-right: 5%;

@media (max-width:900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: max-content;
    margin: 0;
    margin-top: 0.8rem;
}

`


export default ListContainer;