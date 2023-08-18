import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Sign_up(){
    const[signup,setSignup] = useState({});
    const onChangeHandler = (event) => {
        const {name, value} = event.target
        const newInput = {
            ...signup,
          [name]: value,  
        }    
        setSignup(newInput)
      }
      const onClickHandler = () => {

        if(localStorage.getItem('history') == null) {
            const newItem = [signup]
            localStorage.setItem('history', JSON.stringify(newItem))
        }
        else {
            const before = JSON.parse(localStorage.getItem('history'))
            localStorage.setItem('history', JSON.stringify([...before, signup]))
        }


        localStorage.setItem('history', JSON.stringify([...JSON.parse(localStorage.getItem('history'))]))
        const history = JSON.parse(localStorage.getItem('history'))
        console.log(history[0]);
      }
    return(
        <Container>
            <input onChange={onChangeHandler} placeholder="이름" name="name" value={signup.name} />
            <input onChange={onChangeHandler} placeholder="아이디" name="id" value={signup.id} />
            <input onChange={onChangeHandler} placeholder="비밀번호" name="password" value={signup.password} />
            <br />
            <button onClick={onClickHandler}>가입</button>

        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
`
export default Sign_up;