import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../components/Loading'
import {Link} from 'react-router-dom'

const Main=styled.div`

justify-content:center;
display:inline-block;
align-content:center;
height:100%;
width:100%;
margin:0;


`
const Wrapper=styled.div`

justify-items:center;
align-items:center;
display:flex;
flex-direction:column;
height:100%;
width:100%;
margin:0;
color:white;




`
const Synopsis=styled.div`

    display: flex;
    width: 90%;
    padding: 2%;
    flex-direction: column;
    border-radius: 0.8rem;


`
const Wrap=styled.div`
display:flex;
height:30rem;
margin:10px 50px;
flex-direction:row;
align-items:center;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);

border-radius:25px;

background-image: radial-gradient(circle at center bottom, rgb(46, 46, 46) 0%, rgb(46, 46, 46) 6%,rgb(41, 41, 41) 6%, rgb(41, 41, 41) 27%,rgb(36, 36, 36) 27%, rgb(36, 36, 36) 42%,rgb(31, 31, 31) 42%, rgb(31, 31, 31) 63%,rgb(25, 25, 25) 63%, rgb(25, 25, 25) 64%,rgb(20, 20, 20) 64%, rgb(20, 20, 20) 71%,rgb(15, 15, 15) 71%, rgb(15, 15, 15) 100%);

width:70%;



@media ${props=>props.theme.mediaQueries.large}
{

height :100%;
    flex-direction:column;
    width:95%;
}
@media ${props=>props.theme.mediaQueries.small}
{

height :100%;
    flex-direction:column;
    width:90%;
}
`

const Summary=styled.div`
overflow:hidden;
  background-size: cover;

  background-attachment: fixed;
border-radius:20px;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);


  background-image: linear-gradient(135deg, rgb(42,115,113) 0%, rgb(42,115,113) 1%,rgb(2,168,148) 1%, rgb(2,168,148) 53%,rgb(0,214,193) 53%, rgb(0,214,193) 57%,rgb(85,90,102) 57%, rgb(85,90,102) 69%,rgb(65,73,82) 69%, rgb(65,73,82) 75%,rgb(35,39,43) 75%, rgb(35,39,43) 100%);


`

const Heading=styled.h1`

padding-bottom:20px;
`

const Genre=styled.div`


`
const Img=styled.img`

width: 300px;
  height:400px ;
position: relative;
border-radius:20px;
left:-40px;
  
  box-shadow: 0rem 2rem 5rem #282c34;
  transition: all 300ms ease;
  @media ${props=>props.theme.mediaQueries.large}
{ transform:scale(1.03);
    transform:translate(40px,-30px);
    }
    @media ${props=>props.theme.mediaQueries.small}
{ width:200px;
height:280px;
    transform:translate(30px,-20px);
    }

`
const A=styled(Link)`

display:inline-block;
text-Decoration:none;
color:white;
margin:1%;
border-radius:5px;
padding: 10px;
&:hover{
  background:${props=> props.theme.colors.light} ;
  color: ${props=> props.theme.colors.dark};
  transition: all 300ms;
}

`
export const EpWrap = styled(Wrap)`
background-image: radial-gradient(circle at center top, rgb(46, 46, 46) 0%, rgb(46, 46, 46) 6%,rgb(41, 41, 41) 6%, rgb(41, 41, 41) 27%,rgb(36, 36, 36) 27%, rgb(36, 36, 36) 42%,rgb(31, 31, 31) 42%, rgb(31, 31, 31) 63%,rgb(25, 25, 25) 63%, rgb(25, 25, 25) 64%,rgb(20, 20, 20) 64%, rgb(20, 20, 20) 71%,rgb(15, 15, 15) 71%, rgb(15, 15, 15) 100%);
align-items:flex-start;
padding:2%;
overflow:scroll;

height:auto;
max-width:70%;
max-height:30rem;
&::-webkit-scrollbar {
    width: 1em;
    margin-right:1em;
    height:1em;
  }
  

  &::-webkit-scrollbar-thumb {
    background-color: rgb(106, 153, 199);
    border-radius: 50px;
}
  



`;

const Episode = styled(Link)`
text-decoration:none;
color:white;
border-radius: 5px;
&:hover{
  background:${props=> props.theme.colors.light} ;
  color: ${props=> props.theme.colors.dark};
  transition: all 300ms;
}
`




const Grid=styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 5rem));

  padding: 1rem 0;
  grid-gap: 1rem;
  width:100%;






`




const Details=()=>{

   
    const[details,setdetails]=useState({})
    let im=useParams().id
    const [loading,setLoading] = useState(false)
  
    useEffect(()=> {
        setLoading(true)
        fetch(`https://anime-x.herokuapp.com/details/${im}`)
        .then(res=> res.json())
        .then(doc => {
 
            setdetails(doc.results[0])
            setLoading(false)
        })
       
    },[im]);
   

    var ep = Number(details.totalepisode)

    const epList = ()=> {
        let L = []
        for(var i=ep,k=0;i>=1;i--,k++){
            L[k] = i
        }
        return L
    }

    return(

        loading? <Loading /> : 
            <Main >
            <Wrapper >
                <Wrap >
                    <Img src={details.image}  alt=""/>
                    
                    <Synopsis >
                        <Heading style={{}}>{details.title}</Heading>
                    <Summary ><div style={{backdropFilter:'blur(6px)',display:'inline-block',height:'100%',width:'100%',padding:'5%'}}>{details.summary}</div></Summary>
                        <Genre>{String(details.genres).split(', ').map((genre,i)=>
                            <A key={i} to={`/genre/${genre.split(" ").join("-")}/1`}> {genre}</A>)}
                        
                        </Genre>
                    
                    </Synopsis>
              

                </Wrap>
               
                <EpWrap>
                
                       <Grid >
                       {ep===0?<span>Coming Soon</span>:epList().map((ep,index)=> {return <Episode key={index} to={`/watch/${im}/${ep}`}>{ep}</Episode>})}
                       
                       </Grid>
                    
                </EpWrap>  
                
            </Wrapper>
            </Main>
        

    )

    
}
export default Details;