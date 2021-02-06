import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import './404.css'
const Butt=styled.button`


background: linear-gradient(#00d6c1,#02a894);
    padding: 19px;
    border: none;
    border-radius: 50px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    outline: none;
    color: #FFF;
    font-size:x-large;
    text-transform: uppercase;
    cursor: pointer;
    width: 200px;
    position: relative;
    top: 24px;
    left: 25%;
    @media ${props=>props.theme.mediaQueries.medium}{

    width: 150px;}
    @media ${props=>props.theme.mediaQueries.smaller}{
  
    width: 120px;


    }

`

const Main=styled.div` 
    text-align: center;
    text-align: center;
    z-index: 5;
    display: flex;
    flex-direction: column;
    position: relative;
    top:180px;
    width: 23%;
    left: 38%;
    @media ${props=>props.theme.mediaQueries.medium}{
        top: 150px;
    left: 25%;
    }
    @media ${props=>props.theme.mediaQueries.smaller}{
        top: 120px;
    left: 17%;
    }
  `


const Error=()=>{
let history=useHistory()
const handleclick=()=>{
    history.push('/')
}

    return(
        <>
        

        <div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<Main>
  <h1 className="head">404</h1>
 
  <Butt onClick={handleclick}>Go Home</Butt>
</Main>
        </>




    )
}

export default Error;