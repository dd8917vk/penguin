import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  margin: auto auto;
  color: ${props => props.inputColor || "#00FF41"};
  background: black;
  border: none;
  border-radius: 3px;
  display:block;
  text-align:center;
  margin-bottom:20px;
  height: 5em;
  font-size: 1.5em;
`;

const Button = styled.button`
  margin: auto;
  text-align:center;
  color: #00FF41;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #00FF41;
  border-radius: 3px;
  display: inline-block;
  height: 2em;
  width: 8em;
  background-color:black;
`
const Signup = () => {
    return (
        <div style={{paddingTop:"100px"}}>
            <Input placeholder={"username"} type="text" />
            <Input placeholder={"password"}  type="password" inputColor="whitesmoke" />
            <Input placeholder={"password"}  type="passwordX2" inputColor="whitesmoke" />
            <Input placeholder={"email"}  type="password" inputColor="whitesmoke" />
            <Button>submit</Button>
            <p style={{color:"whitesmoke"}}>EMAIL HEADED YOUR WAY</p>
        </div>
    )
}

export default Signup


