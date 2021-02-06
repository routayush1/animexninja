import React from "react";
import {BeatLoader} from "react-spinners";
import styled from "styled-components";
 

const Loader = styled.div`
position:absolute;
top:30%;
left:25%;
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
const ImgLoad = ()=> {

 
    return (
        <Loader>
            <BeatLoader
                size={20}
                margin={10}
                color={"#00d6c1"}
            />
        </Loader>
    );
}

export default ImgLoad