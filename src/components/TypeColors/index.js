import { theme } from "../../styles/theme";

export const TypeColors=(type)=>{
    switch(type){
        case "event":
            return theme.salmom
        case "release":
            return theme.blue
        case "publication":
            return  theme.grayDark
    }
}