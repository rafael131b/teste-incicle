import data from "../../data.json"

const dataTopic=data.data;
const listDatatopic1=dataTopic[0].invited_people
const listDatatopic2=dataTopic[3].invited_people

export const filterTypeEvent=dataTopic.filter((topic)=>topic.type=="event")
export const filterTypeRelease=dataTopic.filter((topic)=>topic.type=="release")
export const filterTypePublication=dataTopic.filter((topic)=>topic.type=="publication")

export const Filter=(n)=>{
    if(n==1){
        return filterTypeEvent
    }
    else if(n==2){
        return  filterTypePublication 
    }
    else if(n==3){
        return  filterTypeRelease
    }
    else{
        return dataTopic
    }
}

export const present=(value)=>{
    if(value==true){
        return "Presença confirmada"
    }
    if(value==false){
        return "Presença Não confirmada"
    }
    return true
}

 export const verification=(param)=>{
    if(param==0){
        return listDatatopic1
    }
    if(param==4){
        return listDatatopic2
    }
    return listDatatopic1
}
