import styled from "styled-components"
import React from "react"
const Button = ({children}) => {

    return (
        <StyledButton>{children}</StyledButton>
    )

}

const StyledButton = styled.button`
    font-size: 1rem;
    text-align: center;
    
`


export default Button;