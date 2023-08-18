import React from 'react'; 
import {MutatingDots} from "react-loader-spinner"; 
import styled from 'styled-components';
import Logo from '../img/logo.png';
function Loading () { 

    return (
    <Container>
        <Logoimage src={Logo}/>
        <MutatingDots 
        color="#ff0000" 
        height={100} 
        width={100} 
        />
        <br />
        <h1>1초 후에 입장됩니다..!</h1>
     </Container>
    ) ; 
}; 
const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Logoimage = styled.img`
    width: 10%;
`
    export default Loading;

