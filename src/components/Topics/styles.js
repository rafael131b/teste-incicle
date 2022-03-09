import styled from 'styled-components'
import {theme} from "../../styles/theme"

export const Container=styled.div`
width: 100%;
background-color: ${theme.white};
margin-top: 10px;
display: flex;
box-shadow: 2px 1px 1px 2px  #ccc;
height: 67px;
.image{
    width: 60px;
    height: 60px;
}
.content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: start;
    width: 100%;
    padding: 10px;
}
h2,p{
    color: ${theme.grayDark};
    padding: 2px;
}
p{
    font-size: 13px;
}
h2{
    font-size: 16px;
}
.contentInvite{
    display:flex;
}
.informations-topics{
    /* border: 1px solid orange; */
    width: 90%;
    margin-left:10px;
}
.buttonMore{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.buttonMore:active{
    background-color:white;
    
}
.buttonMore:hover{
    cursor: pointer;
}
.contentType{
    width: 70px;
    border-radius:20px;
}

// modal

.modal{
    display: none;
    width: 70%;
    height: 300px;
    /* background-color: ${theme.white}; */
    /* border: 1px solid black; */
    position: absolute;
   
    
   
}
a{
color: blue;
text-decoration: none;
}
.modalContent{
    width:30%;
    height: 275px;
    background-color: white;
    box-shadow: 1px 2px grey;
    margin-bottom:200px
}
.active{
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media(max-width:900px){
    height: 250px;
   h2{
       font-size:14px;
   }
   .content{
       display: flex;
       flex-direction: column;
   }
   a,p{
       font-size: 10px;
   }
}

`