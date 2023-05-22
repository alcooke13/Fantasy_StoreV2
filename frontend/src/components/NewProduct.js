import React, { useState } from 'react'
import { postNewProduct } from '../services/ProductServices';

function NewProduct() {
    const [product, setProduct] = useState({});
    
    const handleFormSubmit = (evt) => {
        const manufacturerNew = {
            manufacturerName: "Alistair", 
            speciality: "Tester"
        };
        
        const weapon = {
            typeName: "Weapon",
            manufacturer: manufacturerNew
        }
        
        
        const buildingProduct = {
            productName : "Test Product",
            description : "This is a product created for testing",
            cost: 500,
            price: 750,
        }
        setProduct(buildingProduct);
        postNewProduct(product);

        evt.preventDefault()

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