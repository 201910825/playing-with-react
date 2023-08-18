import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import 'swiper/swiper.min.css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styled from 'styled-components';

function MySwiper(){
  SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
  return(
    <Container>
    <Swiper_container >
      
        <Swiper
          title='기록실'
          grabCursor="true"
          loop="true"
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={2.5}
          centeredSlides
        >
          
          <SwiperSlide>
            <Swiper_images src="https://cdn.pixabay.com/photo/2023/06/08/15/27/garden-decoration-8049840_1280.jpg" alt="pic1"/>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_images src="https://cdn.pixabay.com/photo/2023/06/06/15/32/squirrel-8044947_1280.jpg" alt="pic2"/>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_images src="https://cdn.pixabay.com/photo/2023/06/02/05/15/bird-8034798_1280.jpg" alt="pic3"/>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_images src="https://cdn.pixabay.com/photo/2023/06/09/09/28/kingfisher-8051327_1280.jpg" alt="pic4"/>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper_images src="https://cdn.pixabay.com/photo/2023/06/04/09/10/snow-leopard-8039204_1280.jpg"alt="pic5"/>
          </SwiperSlide>
        </Swiper>
      </Swiper_container>
      </Container>
  );
}
const Container= styled.div`
  width: 100%;
  height: 90.4vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`
const Swiper_container = styled.div`
  width: 60%;
  height: 300px;
  text-align: center;
  display: flex;
  background-color:black;
  border: 1px solid white;
  border-radius: 10%;
  justify-content: center;
  align-items: center;
`
const Swiper_images = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 400px;
  margin-right: 0;
  border: 1px solid black;
  border-radius: 5%;
  z-index: 3;
`
export default MySwiper;