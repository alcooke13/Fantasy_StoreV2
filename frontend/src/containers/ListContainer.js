import React, { useState } from 'react'
import styled from 'styled-components'
import Product from '../components/Product';

function ListContainer({allProducts, view, setView}) {
    // const [view, setView] = useState("all");
    const [chosenProduct, setChosenProduct] = useState({});




    const productList = allProducts.map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct}/>
    });

    const singleProduct = productList[chosenProduct]
    
    
    return (
        <>
        {view === "all" ? 
            <ProductContainer>
                {productList}
            </ProductContainer> : ""}

        {view === 'single' ? 
            <SingleContainer>
                {singleProduct}
            </SingleContainer> : ""}
        </>
  )
};

const ProductContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-left: 5%;
    margin-right: 5%;
    padding: 10px;

@media (max-width:900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: max-content;
    margin: 0;
    margin-top: 0.8rem;
}

`

const SingleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
`


export default ListContainer;