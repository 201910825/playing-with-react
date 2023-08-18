import React, { useState } from "react";
import styled from 'styled-components';
import Category from './Category.jsx';
import Logo from '../img/logo.png';
import { Link } from "react-router-dom";
import Favorite from "./favorite.jsx";
function Header(){
    const [isclicked,setIsclicked] = useState(false);
    
    return(
        <ContainingHeader onClick={()=>setIsclicked(!isclicked)}>
            <StyledHeader >  
                <Link to="/">
                <Logoimage src={Logo}/>
                </Link>   
              <StyledTitle >공부기록장</StyledTitle>  
              <Favorite/>                     
            </StyledHeader>
            <Category isClicked={isclicked}/>
        </ContainingHeader>
    );
}

const StyledHeader = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    border-color: gray;
    padding: 3px;
    z-index: 3;
    background-color: white;
    
`
const Logoimage = styled.img`
    width: 50px;
    top: 20px;
    padding-left:25px;
    background-color: white;
    z-index: 5;
`
const ContainingHeader= styled.div`
    width : 100%;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 1;
`
const StyledTitle = styled.h1`
    color: #4bd83e;
    opacity: 0.8;
    font-size: 22px;
    padding-left: 10px;
    text-decoration: none;
`

export default Header;
