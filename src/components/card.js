import React, { useState } from 'react';
import styled from "styled-components";
import ImgLoad from "./ImgLoad"
import {Link , useLocation} from "react-router-dom"
const Div=styled.div`
display: flex;
 box-shadow: 10px 10px 20px rgba(0,0,0,0.5);

  flex-direction: column;
  text-decoration: none;
  background-color: #333;
  border-radius: 0.8rem;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: scale(1.03);
    
  }
 
`
const Image=styled.img`
width: 100%;
  height: 20rem;

  object-fit: cover;
  border-top-left-radius:0.8rem;
  border-top-right-radius:0.8rem;
  box-shadow: 0rem 2rem 5rem #282c34;
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
   @media ${props => props.theme.mediaQueries.small}{
       height: 16rem;

   }
  @media ${props => props.theme.mediaQueries.smaller} {
    height: 14rem;
  }
`
const Title=styled.div`
top:0;
//background-image: radial-gradient(circle at top right, rgb(4, 20, 62) 0%, rgb(4, 20, 62) 28%,rgb(49, 29, 62) 28%, rgb(49, 29, 62) 45%,rgb(94, 38, 62) 45%, rgb(94, 38, 62) 63%,rgb(138, 47, 62) 63%, rgb(138, 47, 62) 100%);
background-color: #333;


`
const Svg =styled.svg`
${Div}:hover & {
    transform: scale(1.001);
 }

`


 const Card =(props)=>{
   let variable = ""
   const [loading ,setLoading] = useState(true)
   const path = useLocation().pathname.split("/")
   if(path[1]==="recentlyadded"){
     variable = `/watch/${props.id}/${props.episodenumber}`
   }else{
      variable = `/details/${props.id}`
   }

     return (

       <Link style={{color:'white'}}to={variable}>
          <Div >
            {loading? <ImgLoad /> : null}
            <div>

            <Image onLoad={()=> setLoading(false)} src={props.image}/>

            </div>

              <Svg className="card__svg" viewBox="0 0 800 500" orient="auto-start-reverse" style={{position:'absolute' ,bottom:'80'}}>

                  <path
                      d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                      stroke="transparent" fill='#333'/>
                  <path className="card__line"
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="pink" strokeWidth="3" fill="transparent"/>
              </Svg>



            <Title style={{height:"5rem",backgroundColor:'#333',borderRadius:'0 0 0.8rem 0.8rem'}}>

            <h4 >{props.title.slice(0,45)}</h4>
           </Title>

          </Div>
        </Link>
        );

}

export default Card ;