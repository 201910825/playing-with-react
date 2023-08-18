import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Category({isClicked}){
    
    return(
            <HiddenCategory isclicked = {isClicked}>
                <StyledList>
                    <Li><Link to="/page1" style={{textDecoration:"none",color:"black"}}>심심풀이1</Link></Li>
                    <Li>테</Li>
                    <Li>고</Li>
                    <Li><Link to="/page_login" style={{textDecoration:"none",color:"black"}}>로그인</Link></Li>
                    

                </StyledList>
            </HiddenCategory>
            
    );
}
const StyledList = styled.ul`
    display: flex;
    list-style : none;
    justify-content: space-around;
    width: 100%;
`
const Li = styled.li`
    border-right: 1px solid black;
    border-left: 1px solid black;
    width: 25%;
    height: 100%;
    font-size: 20px;
    text-align: center;
`
const HiddenCategory = styled.div`
    width: 100%;
    display: ${(props)=>(props.isclicked ? "flex" :"none")};
    align-items: center;
    justify-content: space-around;
    border: 1px solid gray;
    padding: 3px;
    position: fixed;
    z-index: 6;
    top: 50px;
    margin: 0;
    padding: 3px;
    background-color: white;
`
export default Category;