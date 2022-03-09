
import React,{useState} from "react"
import { Container } from "./styles"
import CreateSection from "../../components/CreateSection"
import Topics from "../../components/Topics"
import data from "../../data.json"
import menagement from "../../management.json"
import Popup from "../../components/Popup"
import Menager from "../../components/Manager"
import { present,verification,Filter } from "../../components/functions"










const Main=()=>{
    const menagerItems=menagement.data[0].boards


const menagerList=menagerItems.map((item,key)=>(
    
    <Menager name={item.title}
    image1={item.resume_files[0].file}
    image2={item.resume_files[1].file}
    image3={item.resume_files[2].file}
    image4={item.resume_files[3].file}
    
    
    />
))
    const [filterType,setFilterType]=useState(0)
        function menagementType(n){
            setFilterType(n)
         
        }
       
    
    return <Container className="container">
                <div className="contentTopics">
                <CreateSection title="Endomarketing" verificationType={menagementType}/>
                {

Filter(filterType).map((topic,key)=>(
    
    <Topics
     title={topic.title} 
      image={topic.file.url}
       key={topic.id}
        type={topic.type}
         date={topic.info.date}
          local={topic.info.place} 
           description={topic.description}
            invite={
                verification(topic.id).map((item)=>(
                    <div className="Card">
                        <div className="profile">
                            <p className="item">{item.name}</p>
                            <img src={item.avatar} className="avatar"></img>

                        </div>

                        <div className="info">
                            <p className="item">{item.username}</p>
                            <p className="item">{item.id}</p>
                            <p className="item">{present(item.confirmed_presence)}</p>
                        </div>
                    </div>
                ))
            }
           />
           
))}
                </div>

                <div className="information">
                    <Popup></Popup>
                    <div className="contentMenagerList">
                        <div className="contentTitle"><h4>Quandos de gestão à vista</h4></div>
                    {menagerList}
                  
                      
                 

                    </div>
       
                </div>

            </Container>
}

export default Main;