import { Container } from "./styles";
import React,{useEffect} from "react";
import Menager from "../../management.json"
import { ButtonMore } from "../Inputs";
import menagement from "../../management.json"

const MenagementItems=menagement.data[0].boards


const Menagement=({id,name,options,image1,image2,image3,image4})=>{
 
    return <Container>
              
                <div className="cardMenagement">
                    <div className="contentOptions">
                        <p>{name}</p>
                            <span style={{display:"flex"}}>
                                <img src="./assets/img/public.png"className="public"></img>
                                    <ButtonMore onClick={()=>{
                                        
                                    }}> <img src="./assets/img/moreMeneger.png"></img> </ButtonMore>
                                </span>
                    </div>
                    <div>
                        <img src={image1} className="image"></img>
                        <img src={image2} className="image"></img>
                        <img src={image3} className="image"></img>
                        <img src={image4} className="image"></img>
                    </div>

                </div>
             </Container>
}

export default Menagement;