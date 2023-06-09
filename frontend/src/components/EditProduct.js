import React, { useState, useEffect } from 'react'
import { editProduct } from '../services/ProductServices';
import styled from 'styled-components';

function EditProduct({chosenProduct, changeViewWeapons, changeViewPots, changeViewArmour}) {
    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [costInput, setCostInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [selected, setSelected] = useState("Weapons");

    useEffect(() => {
      setNameInput(chosenProduct.name);
      setDescriptionInput(chosenProduct.description);
      setCostInput(chosenProduct.cost);
      setPriceInput(chosenProduct.price);
      setSelected(chosenProduct.type);
    }, [chosenProduct]);

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


   let manufacturer = {};
   if(selected === "Potions"){
    productType.id = 2;
    productType.typeName = "Potions";
    manufacturer.id = 2;
    manufacturer.manufacturerName = "The Old Wise Sage";
    manufacturer.speciality = "Alchemist";
    
   }else if(selected === "Armor")
   {
    productType.id = 3;
    productType.typeName = "Armor";
    manufacturer.id = 3;
    manufacturer.manufacturerName = "Armor Tailor";
    manufacturer.speciality = "Armorsmith"
    
   }else{
    productType.id = 1;
    productType.typeName = "Weapons";
    manufacturer.id = 1;
    manufacturer.manufacturerName = "Dwarf's Finest";
    manufacturer.speciality = "Blacksmith";
    
   }


    const handleFormSubmit = (evt) => {
        evt.preventDefault()

       const payload = {
        productName: nameInput,
        description: descriptionInput,
        cost: parseInt(costInput),
        price: parseInt(priceInput),
        productType,
        manufacturer,
      };
      
      editProduct(payload, chosenProduct.productId);
      if(payload.productType.typeName === "Weapons"){
        changeViewWeapons();
      }else if(payload.productType.typeName === "Potions"){
        changeViewPots();
      }else {
        changeViewArmour();
      }
    };
  
    return (
        <Container>
        <Form>
            <label htmlFor="productTypes">Product Type: </label>
            <select name="productTypes" id="productTypes" onChange={handleSelectChange} defaultValue={chosenProduct.type}>
                <option value="Weapons" >Weapon</option>
                <option value="Potions" >Potion</option>
                <option value="Armor" >Armour</option>
            </select>
            <label htmlFor="productName" >Product Name: </label>
            <input type='text' onChange={handleNameInputChange} value={nameInput}></input>
            <label htmlFor='cost' >Cost:</label>
            <input type='number' onChange={handleCostChange}  value={costInput}></input>
            <label>Price:</label>
            <input type='number' onChange={handlePriceChange} value={priceInput}></input>
            <label>Description: </label>
            <textarea onChange={handleDescriptionChange} rows={4} cols={40} value={descriptionInput}></textarea>
            
        </Form>
        <button className='button edit-button'onClick={handleFormSubmit}>Edit</button>
        </Container>
  
  )
};

const Container = styled.div`
  margin-top: 2%;
  border: solid 2px #554545;
  padding: 25px;
  border-radius: 0.3em;
  background-color: hsl(0, 1%, 100%);

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
    background-color:hsl(249, 85%, 60%);

  }
    
`

export default EditProduct;