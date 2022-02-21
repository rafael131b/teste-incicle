import React,{useState}from "react"
import { Container } from "./styles";

const Popup=()=>{

    const [pop,setPop]=useState(false)

    return <Container style={pop==true? {display:"none"}:{}}>
        <div className="contentPoupup" >
            <h3>Endomarketing</h3>
            <p>
            Endomarketing está relacionado às
                ações de treinamento ou qualificação
                dos colaboradores da empresa
                visando um melhor serviço para o
                cliente. Marketing interno, devido ao
                nome, é usualmente confundido com
                Endomarketing mesmo sendo
                conceitos diferentes.
            </p>
            <button onClick={()=>setPop(true)}>Dispensar</button>
        </div>

        </Container>
}

export default Popup;