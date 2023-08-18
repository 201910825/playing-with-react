import React from "react";
import styled from "styled-components";
import Makelist from "./makelist";
function Mainform(){
    
    return (
        <MainContainer>
        <Makelist/>
        </MainContainer>

    );
}
const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Mainform;