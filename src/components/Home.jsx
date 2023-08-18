import React from "react";
import MySwiper from "./Swiper"
import styled from "styled-components";
function Home(){
    return(
        <Container>
            <MySwiper/>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
`
export default Home;