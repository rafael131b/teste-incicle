import { Container } from "./styles"
import { TypeColors } from "../TypeColors";
import { useState } from "react";
import data from "../../data.json"



const Topics=({image,title,type,date,confirmation,local,description,id,invite})=>{
    const [modal,setModal]=useState(false)
    const ModalVisible=()=>{
        return modal
    }
    
    return <Container >
                <div className="content" >
                    <div>
                        <img src={image} className="image"></img>
                    </div>

                    <div className="informations-topics">
                        <h2>{title}</h2>
                    
                        
                        <div className="contentInvite">
                            <button style={{backgroundColor:`${TypeColors(type)}`}}>{type}</button>
                            <p> {local} |</p>
                            <p>{date} |</p>
                            <p>{confirmation}</p>
                            <p>{id}</p>
                            <a  onClick={()=>{
                                setModal(true)
                            }} href="#"
                             style={type!=="event"?{display:"none"}:{}}>3 confirmações de 15
                             </a>
                             <div className={`modal ${ModalVisible()?"active":" "}`}>
                                 <div className="modalContent">
                                 <div style={{textAlign:"end"}}><button onClick={()=>setModal(false)}>fechar</button></div>
                                  <div>{invite}</div>
                                  
                                 </div>
                             </div>
                        </div>

                        <div><p>{description}</p></div>
                        
                    </div>
                    <button className="buttonMore"><img src="./assets/img/more.png">
                    </img></button>

                </div>
             </Container>
}

export default Topics;