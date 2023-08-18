import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Log_in(){
    const navigate = useNavigate();

    const goToHome = () => {
    navigate("/home");
    };
    const[login,setLogin] = useState({});
    const onChangeHandler = (event) => {
        const {name, value} = event.target
        const newInput = {
            ...login,
          [name]: value,  
        }    
        setLogin(newInput)
      }
      const onClickHandler = ()=>{
        let i =0;
        let findindex= false;
        const history = JSON.parse(localStorage.getItem('history'))
        for(i;i<history.length;i++){
            if(login.id===history[i].id && login.password===history[i].password){
                findindex=true;
                break;
            }
        }
        if(findindex){
            alert(history[i].name+"님 안녕하세요.");
            goToHome();}
        else{alert("존재하지않는 회원입니다.")}
        
      }
      
    return(
        <Container>
            <input onChange={onChangeHandler} placeholder="아이디" name="id" value={login.id} />
            <input onChange={onChangeHandler} placeholder="비밀번호" name="password" value={login.password} />
            <br />
            <button onClick={onClickHandler}>로그인</button>
            

        </Container>
    );

}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    align-items: center;
`
export default Log_in;