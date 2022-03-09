import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container=styled.div`
justify-content: space-between;
display: flex;
align-items: center;
flex-wrap: wrap;

.titleSection{
color: ${theme.grayDark};
font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: 35px;
line-height: 48px;
}
.contentInputs{
    display: flex;
}


@media(max-width:900px ){
    .titleSection{
        font-size:25px;
    }
}
`