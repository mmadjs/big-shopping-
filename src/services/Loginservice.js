
import http from "./Httpservice"

export const LoginUser=(data)=>{
    return http.post("/user/login",data)
}