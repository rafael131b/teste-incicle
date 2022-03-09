import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const SelectionCreate=styled.button`
background-color: ${theme.blue};
color: white;
font-weight: 400;
font-size: 14px;
height: 38px;
width: 103px;

`



export const  SelectType=styled.select`
background-color: ${theme.white};
color: ${theme.grayDark};
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
height: 38px;
width: 95px;
margin-right:10px;

`


export const ButtonMore=styled.button`
height: 16px;
width: 16px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
:active{
    background-color: orange;
}

`