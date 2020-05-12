import React , {useState} from "react";
import styled from "styled-components";
import { FaBars  } from "react-icons/fa";
import {Link,useHistory} from 'react-router-dom'
import { RiUserHeartLine,RiImageAddLine } from "react-icons/ri";
import { TiThListOutline } from "react-icons/ti";


import "./nav.css"
const Nav=styled.div`
background: ${(props)=> props.theme.colors.dark};
  height: 80px;
  border-radius: 1em;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
  width: 96%;
  position: sticky;
  z-index: 100000;
  margin: 2%;
`
const Ul=styled.ul`
float: right;
  margin-right: 20px;
  transition: all 300ms;
  @media (max-width: 1270px){
    margin-top:3%;
  position: absolute;
  border-radius: 20px;
    width: 96%;
    height: auto;
    background: ${props => props.theme.colors.dark};
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .8s;
  }
`
const Li=styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
  @media (max-width: 1270px){
  display: block;
    margin: 50px 0;
    line-height: 30px;
  }
`
const A=styled(Link)`
 color: white;
  font-size: 25px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  &:active{
    background:${props=>props.theme.colors.light};
    color:${props=>props.theme.colors.dark};
  }
  &:hover{
  background:${props=> props.theme.colors.light} ;
  color: ${props=> props.theme.colors.dark};
  border-radius:5px;
  transition: all 300ms;

  @media (max-width: 952px){
      font-size: 16px;
  }
  @media (max-width: 858px){
      font-size: 16px;
      &:hover{
      background: ${props=> props.theme.colors.light};
    color: ${props=> props.theme.colors.dark};
      }
      }
  }
`


const Label= styled.label`
font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
  @media (max-width: 1270px){
      display: block;
  }
 `
const Input=styled.input`
  display: none;
  @media (max-width: 1270px){
   &:checked ~ ul{
    left: 2%;
  }
  }

`
const Logo=styled(Link)`
  float:left;
 color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 40px;
  font-weight: bold;
  @media (max-width: 958px){
      font-size: 30px;
  }
  @media (max-width: 350px){
      font-size: 20px;
  }
`



const Navbar=()=>{
  let history=useHistory()
    const [query , setQuery] = useState('')
    return(
        <Nav>
            <Input type="checkBox" id="check" onClick={(e)=>{
              if(document.getElementById('check').checked){
              document.getElementById('click').style.boxShadow="10px 10px 20px rgba(0,0,0,0.5)"}
              else{
                document.getElementById('click').style.boxShadow="0px 0px 0px rgba(0,0,0,0.5)"
              }
            }}/>
                <Label htmlFor="check" >
                    <FaBars/>
                </Label>


            <Logo to="/"><img src={process.env.PUBLIC_URL + '/ninja.svg'} style={{height:'45px',top:'9px', width:'45px',position:'relative' }} alt=""/>ANIMEX</Logo>
                <Ul id="click">
                    <Li><A to="/popular/1" onClick={()=>{document.getElementById('check').checked=false;}}><RiUserHeartLine size='1.2em' style={{position: 'relative',top: '6px',right: '4px'}} /> Popular</A></Li>
                    <Li><A to="/recentlyadded/page/1" onClick={()=>{document.getElementById('check').checked=false;}}><RiImageAddLine size='1.2em' style={{position: 'relative',top: '6px',right: '4px'}}/>Recently Added</A></Li>
                    <Li><A to="/list/all/1" onClick={()=>{document.getElementById('check').checked=false;}}><TiThListOutline size='1.2em' style={{position: 'relative',top: '6px',right: '4px'}}/> Anime List</A></Li>
                    <Li>
                      <form onSubmit={(e)=>{
                        e.preventDefault()
                        document.getElementById('check').checked=false;
                        history.push(`/search/${query}/1`)
                      }}>
                        <div className="SearchBox">
                            <input type="text" className="SearchBox-input" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search..."/>

                                <Link className="SearchBox-button" to={`/search/${query}/1` } onClick={()=>{document.getElementById('check').checked=false;}} >
                                    <i className="SearchBox-icon  material-icons">search</i>
                                </Link>

                        </div>
                        </form>

                    </Li>

                </Ul>
        </Nav>
        )
}
export default Navbar