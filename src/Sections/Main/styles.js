import styled from 'styled-components'
import {theme} from "../../styles/theme"

export const Container=styled.main`
margin-top:50px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

.contentTopics{
    
    width: 75%;
    height: 80vh;

    /* overflow:auto; */
}
.information{
    /* border: 1px solid red; */
    width: 20%;
    height: 82vh; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
    
}
.contentMenagerList{
   background-color: ${theme.white};
   height: 333px;
   display: flex;
   flex-direction: column;
   margin-top:15px;
   /* justify-content: center;
   text-align:start; */
   /* border: 1px solid blue; */
   
}
h4{
    height: 28px;
    font-family: Roboto;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: ${theme.grayDark};
}
.contentTitle{
    width: 90%;
    margin: 0 auto;
    text-align: start;
}

.avatar{
    width: 50px;
    height: 50px;
}
.Card{
  width  :100% ;
  display: flex;
  border-bottom:1px solid black;
  color: white;
  background-color: ${theme.blue};
    
}
.item{
    color: white;
}
.info{
    
    color: white;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.blue};
}
@media(max-width:900px){
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   .information{
       width: 70%;
       margin-top:200px;
       position: absolute;
   }
   .contentMenagerList{
       height: 500px;
   }
}
`