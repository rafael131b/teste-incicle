import styled from 'styled-components'
import {theme} from "../../styles/theme"
export const Container=styled.div`

width: 100%;
height: 30%;
background-color: ${theme.white};

p{
    font-size: 13px;
}
.image{
    width: 48px;
    height: 48px;
    padding: 2px;
}
.public{
    width: 12px;
    height: 12px;
    margin-right:2px;
    margin-top:2px;
}
.contentOptions{
    display: flex;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
}
.cardMenagement{
    background-color: ${theme.grayLight};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin:0 auto;
    
}
@media(max-width:900px){
    margin-bottom: 30px;
    .cardMenagement{
        height: 150px;
        /* border: 1px solid black; */
        box-shadow: 2px 1px ${theme.grayDark};
    }
}
`