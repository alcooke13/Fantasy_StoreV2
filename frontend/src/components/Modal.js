import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


function ModalComponent({show, setShow, productData}) {
   const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const listOfProductNames = () => {
            let stockCount = {};
            let keyAndValues = [];
              
            for(let product of productData){
              stockCount[product.productName.toLowerCase()] = stockCount[product.productName.toLowerCase()] ? stockCount[product.productName.toLowerCase()] + 1 : 1; 
            }
      
            for(let [key, value] of Object.entries(stockCount)){
              keyAndValues.push([key, value])
            }
      
            setStockData(keyAndValues)
            
          };

        listOfProductNames();
    }, [productData])

    if(show === false){
        return null
    }


    const productStock = stockData.map((product, index) => {
        return <Li key={index}>{product[0]}: {product[1]}</Li>
    });
  
    return (
    <Modal>
        <ModalContent>
            <ModalHeader>
                <h4>Stock Quantity</h4>
            </ModalHeader>
        <ModalBody>
           {productStock}
        </ModalBody>
        <ModalFooter>
            <button className='button delete-button' onClick={() => setShow(false)}>Close</button>
        </ModalFooter>
        </ModalContent>
    </Modal>
  )
};

const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0 , 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

const ModalContent = styled.div`
    width: 600px;
    min-height: 400px;
    max-height: fit-content;
    background-color: white;
    border-radius: 0.3em;
    
`
const ModalHeader = styled.div`
    padding: 5px;
    text-align: center;
    
`

const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`

const ModalFooter = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`

const Li = styled.li`
    list-style: none;
    text-transform: capitalize;
    font-size: 0.9em;
    margin: 0.5em;
`

export default ModalComponent;