import React, { useState } from 'react'
import styled from 'styled-components'
import Product from '../components/Product';
import NewProduct from '../components/NewProduct';
import { deleteProduct } from '../services/ProductServices';

function ListContainer({allProducts, view, setView, weaponsData, potionsData, armoursData, filtered}) {
    const [chosenProduct, setChosenProduct] = useState("");


    const productList = allProducts.map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index}/>
    });

    const weaponList = weaponsData.map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index}/>
    });

    const potionsList = potionsData.map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index}/>
    });

    const armoursList = armoursData.map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} id={product.id} index={index}/>
    });

    let singleProduct;
    if(chosenProduct.type === "Weapons" && filtered === true){
        singleProduct = weaponList[chosenProduct.index];
    }else if (chosenProduct.type === "Potions" && filtered === true){
        singleProduct = potionsList[chosenProduct.index];
      
    }else if (chosenProduct.type === "Armor" && filtered === true){
        singleProduct = armoursList[chosenProduct.index];
    }else {
        singleProduct = productList[chosenProduct.index];
    }

    const handleDeleteProduct = () => {
        let productId = chosenProduct.productId;
        deleteProduct(productId);
        setView("all");
    };
    

    return (
        <>
        {view === "all" ? 
            <ProductContainer>
                {productList}
            </ProductContainer> : ""}


        {view === "weapons" ? 
            <ProductContainer>
                {weaponList}
            </ProductContainer> : ""}
        
        {view === "potions" ? 
            <ProductContainer>
                {potionsList}
            </ProductContainer> : ""}
        
        {view === "armours" ? 
            <ProductContainer>
                {armoursList}
            </ProductContainer> : ""}

        {view === "single" ? 
            <SingleContainer>
                {singleProduct}
                <ButtonContainer>
                    <EditButton type='button'>Edit</EditButton>
                    <DeleteButton type='button' onClick={handleDeleteProduct}>Delete</DeleteButton>
                </ButtonContainer>
            </SingleContainer> : ""}

        {view === "new" ? <SingleContainer><NewProduct /> </SingleContainer>: ""}


        {view === "edit"}
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
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
   
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 1em;

`

const DeleteButton = styled.button`
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: hsl(0, 60%, 50%);
    border: none;
    min-height: 40px;
    min-width: 100px;
    border-radius: 0.3em;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-style: italic;
    color: white;
  

  cursor: pointer;
  &:hover {
    background-color: hsl(0, 60%, 60%);

  }


`

const EditButton = styled.button`
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: hsl(240, 40%, 65%);
    border: none;
    min-height: 40px;
    min-width: 100px;
    border-radius: 0.3em;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-style: italic;
    color: white;
  

  cursor: pointer;
  &:hover {
    background-color:hsl(240, 40%, 70%)

  }
`


export default ListContainer;