import React from "react";
import { useState } from "react";
import styled from "styled-components";
function Favorite(){
    const [myfavorite,setMyfavorite]= useState(0);
    return (
        <Contents>
                <FavoriteIcon Myfavorite={myfavorite} onClick={()=>{
                    if(myfavorite===0) 
                        setMyfavorite(myfavorite+1);
                    else 
                        setMyfavorite(myfavorite-1); 
                    }}>
                        Yee</FavoriteIcon>
                <h3>{myfavorite}</h3>
                </Contents>
    );
}
const FavoriteIcon = styled.button`
    font-size: 25px;
    background-color: ${({Myfavorite})=>{
        if(Myfavorite===1){
            return "aqua";
        }
        else {return "yellow";}
    }
};
    border: ${({Myfavorite})=>{
        if(Myfavorite===1){
            return "1px solid black";
        }
        else {return "none";}
    }
};
    border-radius: 100%;
    color: ${({Myfavorite})=>{
        if(Myfavorite===0){
            return "black";
        }
        else {return "red";}
    }
};
    :hover{
        border: 1px solid black;
        color: white;
    };
`;
const Contents = styled.div`
    width: 10%;
    display: flex;
    position: fixed;
    justify-content: start;
    top: 10px;
    right: 10px;
    z-index: 5;
`
export default Favorite