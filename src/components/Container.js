import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link, useLocation , useParams,useHistory} from 'react-router-dom'
import AnimeList from './AnimeList';
import Loading from './Loading';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import {FaRegArrowAltCircleLeft} from 'react-icons/fa'



const Box=styled.div`
height:100%;
width:100%;
padding:10%;
padding-top: 0;
padding-bottom: 0;
justify-content:center;
align-items:center;
@media ${props => props.theme.mediaQueries.smaller} {
    padding:3% ;
  }
@media ${props => props.theme.mediaQueries.small} {
    padding:4px;
  }
`

const PageB=styled(Link)`
text-decoration:none;
color: white;
    font-size: xxx-large;

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


const Container = ()=> {
    
    let {page  , query} = useParams()
    let path = useLocation().pathname.split('/')
    let history=useHistory()
 
    const [loading,setLoading] = useState(false)
    let url = ``
    if(path[1]==="popular"){
        url = `https://anime-x.herokuapp.com/popular/${page}`
    }else if(path[1] ==="search") {
        url = `https://anime-x.herokuapp.com/search/${query}/${page}`
    }else if(path[1]==="genre"){
        url = `https://anime-x.herokuapp.com/genre/${query}/${page}`
     
    }
    else if(path[1]==="recentlyadded")
    {
        url=`https://anime-x.herokuapp.com/recentlyadded/${page}`

    }
    
    const [list,setList] =useState([])
    useEffect(()=> {
        setLoading(true)
        fetch(url)
        .then(res=> res.json())
        .then(doc => {
            
            if(doc.results.length!==0){
            setList(doc.results)
            setLoading(false)}
            else{
                history.push('/error')
              
            }
        })
    },[page,url,history]);
    return(
        <Box>{loading?<Loading /> :<>
                    <AnimeList data={list} />
            <div style={{display:'flex',flexDirection:'row',height:'100px',alignItems:'center'}}>

                {page==='1'?null:<PageB style={{position:'absolute',left:'17%'}} to={`/${path[1]}${path[1]!=="popular"?`/${path[2]}`:''}/${Number(page)-1}`}><FaRegArrowAltCircleLeft/></PageB>
                }
                <br></br>
                <PageB style={{position:'absolute',right:'17%'}}to={`/${path[1]}${path[1]!=="popular"?`/${path[2]}`:''}/${Number(page)+1}`}><FaRegArrowAltCircleRight/></PageB>
            </div>   
        </> }

        </Box>
    )
}

export default Container;