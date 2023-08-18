
import React, { useEffect, useState } from 'react';
import'../src/App.css';
import Loading from './components/Loading.jsx';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Page1 from './pages/page1';
import Header from './components/header';
import Login_page from './pages/page_login';
function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[]) 
   console.log("실행 함? ",loading);
  return (
    <Container>
      {loading ? <Loading/>:<>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page_login" element={<Login_page/>}></Route>
        </Routes>
      </>
      }
      
    </Container>
   
  );
}

const Container = styled.div`
`

export default App;
