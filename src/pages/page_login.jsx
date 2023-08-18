import React from "react";
import styled from "styled-components";
import Sign_up from "../components/Signup";
import Log_in from "../components/Login";
function Login_page(){
    
    return(
        <Container>
            <Log_in/>
            <Sign_up/>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
    align-items: center;
`
export default Login_page;