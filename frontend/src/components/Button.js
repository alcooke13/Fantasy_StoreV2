import styled from "styled-components"
import React from "react"
const Button = ({children}) => {

    return (
        <StyledButton>{children}</StyledButton>
    )

}

const StyledButton = styled.button`
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
    background-color: hsl(240, 40%, 70%);

  }
`
export default Button;