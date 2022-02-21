import react from "react";
import { Container } from "./styles";
import {SelectionCreate,SelectType} from "../Inputs"
const CreateSection=(props)=>{
    

    return<Container>
        <h1 className="titleSection">{props.title}</h1>
        <div className="contentInputs">
            <SelectType onChange={(e)=>{
                props.verificationType(e.target.value)
               
                
            }}>
            <option>Todos</option>
            <option value="1">Evento</option>
            <option value="2">Publicação</option>
            <option value="3">release</option>
            </SelectType>
            <SelectionCreate> Criar</SelectionCreate>
                
            
        </div>
         </Container>
    
}

export default CreateSection;