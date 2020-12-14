import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

const CardInput = styled.input`
  width: 90%;
  color:black;
  /* padding: 21px 0;
  box-sizing: content-box;
  width: 70%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  align-self: center;
  text-align: center; */
  /* &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  } */
`;

const CardTitle = styled.p`
  /* display: flex;
  align-self: center;
  justify-content: center;
  padding: 7px 0;
  border-bottom: 1px solid #fff;
  width: 70%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0; */
`;

// const boardObject = { title: "Your Card", items: ["item1", "item2"] };

export default function Comment(props) {
    const text = props.text
    console.log(text)
    const [textContent, setTextContent] = useState(text);
    const [showTitle, setShowTitle] = useState(true);
    const inputEl = useRef(null);
  
    const handleAddItem = (e) => {
      const item = "initial";
      setTextContent((prevState) => {
        return { ...prevState, items: prevState.items.concat(item) };
      });
    };
  
    const handleTitleValue = (event) => {
      const value = event.target.value;
      setTextContent((prevState) => {
        return {
          ...prevState,
          title: value,
        };
      });
    };
    const handleShowTitle = () => {
      setShowTitle(!showTitle);
      console.log('out')
    };
  
    const handleSelectText = (event) => inputEl.current.select();
    return (
      <div>
          {showTitle ? (
            <CardTitle onClick={handleShowTitle}>{textContent?.title}</CardTitle>
          ) : (
            <CardInput
              autofocus={true}
              ref={inputEl}
              onChange={handleTitleValue}
              onBlur={handleShowTitle}
              onFocus={handleSelectText}
              value={textContent?.title}
            ></CardInput>
          )}
      </div>
    );
  }