import React, { useEffect, useState } from "react";
import { useParams, Link ,useHistory} from "react-router-dom";
import styled from 'styled-components';
import {GiShurikenAperture} from "react-icons/gi"
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import {FaRegArrowAltCircleLeft} from 'react-icons/fa'
import Loading from "../components/Loading";




const L = styled(Link)`
margin: 2%;
color: white;
font-size:25px;
@media (max-width: 700px){
          font-size: medium;
          margin: 0.5%;
} 

`;
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(70px,500px));
width:100%;
justify-content: space-evenly;
text-align:left;
`;
const Container = styled.div`
 box-shadow: 10px 10px 20px rgba(0,0,0,0.5);

    margin:1%;
    padding:1%;
    border-radius:20px;
    justify-content: center;
    background-image: radial-gradient(circle at center, rgb(46, 46, 46) 0%, rgb(46, 46, 46) 6%,rgb(41, 41, 41) 6%, rgb(41, 41, 41) 27%,rgb(36, 36, 36) 27%, rgb(36, 36, 36) 42%,rgb(31, 31, 31) 42%, rgb(31, 31, 31) 63%,rgb(25, 25, 25) 63%, rgb(25, 25, 25) 64%,rgb(20, 20, 20) 64%, rgb(20, 20, 20) 71%,rgb(15, 15, 15) 71%, rgb(15, 15, 15) 100%);
    display: flex;
    flex-direction: column;

`;

const Alpha = styled.div`
justify-content: space-around;
display:flex;
flex-wrap: wrap;
margin:0;
border-radius:20px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
height: 100px;
align-items: center;
backdrop-filter:blur(6px);

@media (max-width: 480px){
        justify-content: normal;
        }
`

const PageB=styled(Link)`
text-decoration:none;
color: white;
    font-size: xx-large;
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
&:hover {
    transform: scale(1.5);
    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
   &::after {
      transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: white;
    box-shadow: 0rem 2rem 5rem;
    transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);

   }
`

const ListPage = () => {
    const Alphabet = ()=> {
        var x = []
        var i = 65;
        var j = 91;
     
        for(var k = i; k < j; k++){
            var str =String.fromCharCode(k);
                    x.push(str)
        }
        return x
    }
    const [loading,setLoading] = useState(false)
    let history=useHistory()
    const {vari,page} = useParams()
    const [list,setList] = useState([])
    const uri = `https://anime-x.herokuapp.com/list/${vari}/${page}`
    useEffect(()=> {
        setLoading(true)

        fetch(uri)
        .then(res=> res.json())
        .then(data=>{ 
            
            if(data.list.length!==0)
            {   setList(data.list)
                setLoading(false)
                }
          else{
                    history.push('/error')
                }
        }
        )
    },[page,vari,uri,history])

    return(
        loading?<Loading /> :<>
       <Container>
           <div style={{backgroundImage:'linear-gradient(135deg, rgb(42,115,113) 0%, rgb(42,115,113) 1%,rgb(2,168,148) 1%, rgb(2,168,148) 53%,rgb(0,214,193) 53%, rgb(0,214,193) 57%,rgb(85,90,102) 57%, rgb(85,90,102) 69%,rgb(65,73,82) 69%, rgb(65,73,82) 75%,rgb(35,39,43) 75%, rgb(35,39,43) 100%)',borderRadius: '20px'}}>
            <Alpha>
            
                {Alphabet().map((el,index)=> {
                return <L key={index} style={{color:"black",margin:'4px'}} to={`/list/${el}/1`}>{el}</L>
            })}
           
            </Alpha>
            </div>
               <Grid>
                    {list.map((el,index)=> {
                    return <L key={index} to={`/details/${el.id}`}><GiShurikenAperture color="#57a7e6" style={{position:"relative",top:"3px",right:"6px"}}/>{el.title}</L>
                    })}
               </Grid>
               <div style={{display:'flex',flexDirection:'row',height:'100px',alignItems:'center',justifyContent:"space-between"}}>
                   {page==='1'?null:<PageB style={{position:'absolute',left:'17%'}} to={`/list/${vari}/${Number(page)-1}`}><FaRegArrowAltCircleLeft/></PageB>}
                <PageB style={{position:'absolute',right:'17%'}} to={`/list/${vari}/${Number(page)+1}`}><FaRegArrowAltCircleRight/></PageB>
                </div>
       </Container>
            </>

    )
}

export default ListPage;