

import http from "./Httpservice"

export const Logouthttp=(data)=>{
    return http.delet("/user/logout",data)
}