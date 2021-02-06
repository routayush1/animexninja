import React from 'react'
import styled from 'styled-components'
import Card from "./card";

const AnimeCard = styled(Card)`

`;

const Grid=styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 15rem));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  padding: 4rem 0;
  grid-gap: 4rem 2rem;
  @media ${props => props.theme.mediaQueries.medium} {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 13rem));
    justify-content: space-around;
    grid-gap: 4rem 1.5rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    grid-template-columns: repeat(auto-fit, minmax(7rem, 10rem));
    grid-gap: 4rem 1rem;
  }
`

const AnimeList=({data})=>{

    return(
            <Grid>
                {data.map((anime,key)=>{ return(<AnimeCard {...anime} key={key} />)} )}
            </Grid>
    )
}
export default AnimeList;