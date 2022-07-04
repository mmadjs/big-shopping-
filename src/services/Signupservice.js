import http from "./Httpservice"

export const signUPuser=(data)=>{
    return http.post("/user/register",data)
}