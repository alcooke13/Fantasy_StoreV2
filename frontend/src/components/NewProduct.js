import React, { useState, useEffect } from 'react'
import { postNewProduct } from '../services/ProductServices';

function NewProduct() {

    const handleFormSubmit = (evt) => {
    //    evt.preventDefault();
       
       const payload = {
        productName: "REE",
        description: "Tests wounds",
        cost: 25.0,
        price: 50.0,
        productType: {
          id: 2,
          typeName: "Potions",
        },
        manufacturer: {
          id: 2,
          manufacturerName: "The Old Wise Sage",
          speciality: "Alchemist",
        },
      };
    //   setProduct(payload);
    //   console.log(payload, "From new Product");
      postNewProduct(payload)
    };
  
    return (
    <>
        <form>
            <label htmlFor="productTypes">Product Type </label>
            <select name="productTypes" id="productTypes">
                <option value="weapons">Weapon</option>
                <option value="potions">Potion</option>
                <option value="armours">Armour</option>
            </select>
            <label htmlFor="productName">Product Name: </label>
            <input type='text'></input>
            <label>Cost:</label>
            <input type='number'></input>
            <label>Price:</label>
            <input type='number'></input>
            <label>Product Description: </label>
            <textarea></textarea>
            <button type='submit' onClick={handleFormSubmit}>Add</button>
        </form>
    </>
  )
};

export default NewProduct;