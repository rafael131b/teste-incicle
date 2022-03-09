import styled from 'styled-components'
import {theme} from "../../styles/theme"
export const Container=styled.div`

height: 309px;
width: 100%;
background-color: ${theme.salmom};
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
.contentPoupup{
    /* border: 1px solid black; */
    width: 90%;
    height:90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
   
}
p{
    font-family: Open Sans;
font-size: 11px;
font-style: normal;
font-weight: 300;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: ${theme.grayDark};

}
h3{
    font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: ${theme.grayDark};
}
button{
    background-color: transparent;
    border: 1px solid black;
    width: 112px;
    height: 35px;
}
.dispense{
    display: none;
}

`