import React, { useState } from 'react'
import styled from 'styled-components';


function ModalComponent({}) {
    const [show, setShow] = useState(false)

    if(show === false){
        return null
    }
  
    return (
    <Modal>
        <ModalContent>
            <ModalHeader>
                <h4>Modal Title</h4>
            </ModalHeader>
        <ModalBody>
            Modal Content
        </ModalBody>
        <ModalFooter>
            <button>Close</button>
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
    width: 400px;
    background-color: white;
`
const ModalHeader = styled.div`
    padding: 10px;
`

const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`

const ModalFooter = styled.div`
    padding: 10px;
`

export default ModalComponent;