import React, { useState } from 'react'
import { postNewProduct } from '../services/ProductServices';
import styled from 'styled-components';

function NewProduct({changeViewAll}) {
    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [costInput, setCostInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [selected, setSelected] = useState("Weapons");

    let productType = {};

    const handleNameInputChange = (evt) => {
        setNameInput(evt.target.value);
    };

    const handleDescriptionChange = (evt) => {
        setDescriptionInput(evt.target.value);
    };
    const handleCostChange = (evt) => {
        setCostInput(evt.target.value);
    };

    const handlePriceChange = (evt) => {
        setPriceInput(evt.target.value);
    };

    const handleSelectChange = (evt) => {
        setSelected(evt.target.value)
    };

   if(selected === "Potions"){
    productType.id = 2;
    productType.typeName = "Potions"
   }else if(selected === "Armor")
   {
    productType.id = 3;
    productType.typeName = "Armor"
   }else{
    productType.id = 1;
    productType.typeName = "Weapons"
   }


    const handleFormSubmit = (evt) => {
        evt.preventDefault();

       const payload = {
        productName: nameInput,
        description: descriptionInput,
        cost: parseInt(costInput),
        price: parseInt(priceInput),
        productType,
        manufacturer: {
          id: 2,
          manufacturerName: "The Old Wise Sage",
          speciality: "Alchemist",
        },
      };
      
      postNewProduct(payload);
      changeViewAll();
      
    };
  


    return (
        <Container>
        <Form>
            <label htmlFor="productTypes">Product Type: </label>
            <select name="productTypes" id="productTypes" onChange={handleSelectChange} >
                <option value="Weapons" >Weapon</option>
                <option value="Potions" >Potion</option>
                <option value="Armor" >Armour</option>
            </select>
            <label htmlFor="productName">Product Name: </label>
            <input type='text' onChange={handleNameInputChange}></input>
            <label>Cost:</label>
            <input type='number' onChange={handleCostChange}></input>
            <label>Price:</label>
            <input type='number' onChange={handlePriceChange}></input>
            <label>Description: </label>
            <textarea onChange={handleDescriptionChange} rows={4} cols={40}></textarea>
            
        </Form>
        <Button type='submit' onClick={handleFormSubmit}>Add</Button>
        </Container>
  
  )
};

const Container = styled.div`
   margin-top: 2%;
   border: solid 2px #554545;
    padding: 25px;
    border-radius: 0.3em;

    @media (max-width:900px) {
        border: none;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Button = styled.button`
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: rgb(9, 9, 78);
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
    background-color: hsl(249, 85%, 60%);

  }
    
`

export default NewProduct;