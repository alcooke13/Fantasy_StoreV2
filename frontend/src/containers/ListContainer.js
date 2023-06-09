import React, { useState } from 'react'
import styled from 'styled-components'
import Product from '../components/Product';
import NewProduct from '../components/NewProduct';
import { deleteProduct } from '../services/ProductServices';
import EditProduct from '../components/EditProduct';

function ListContainer({allProducts, view, setView, weaponsData, potionsData, armoursData, filtered, changeViewAll, changeViewWeapons, changeViewArmour, changeViewPots, show, setShow}) {
    const [chosenProduct, setChosenProduct] = useState("");


    const productList = allProducts.sort((productA, productB) => productB.productType.typeName.localeCompare(productA.productType.typeName))
    .map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index}/>
    });

    const weaponList = weaponsData.sort((weaponA, weaponB) => weaponA.productName.localeCompare(weaponB.productName))
    .map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index}/>
    });

    const potionsList = potionsData.map((product, index) => {
        return <Product key={index} product = {product} view={view} setView={setView} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index}/>
    });

    const armoursList = armoursData.map((product, index) => {
        return <Product key={index} product = {product} setChosenProduct={setChosenProduct} chosenProduct={chosenProduct} index={index} setView={setView} view={view}/>
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
        changeViewAll()
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
                    <button className='button edit-button' onClick={() => setView("edit")}>Edit</button>
                    <button className='button delete-button' onClick={handleDeleteProduct}>Delete</button>
                </ButtonContainer>
            </SingleContainer> : ""}

        {view === "new" ? 
            <SingleContainer>
                <NewProduct changeViewAll = {changeViewAll}/> 
            </SingleContainer>: ""}


        {view === "edit" ? <SingleContainer><EditProduct chosenProduct={chosenProduct} setView={setView} changeViewAll={changeViewAll} changeViewWeapons ={changeViewWeapons} changeViewPots = {changeViewPots} changeViewArmour = {changeViewArmour}/></SingleContainer>: ""}
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

export default ListContainer;