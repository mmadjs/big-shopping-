import { createContext, useContext, useEffect, useState } from "react";

export const AuthProvidercontaxt = createContext()
export const AuthProvidercontaxtDispatch = createContext()
const LOCAL_STORAGE_AUTH_KEY ="authState"
const AuthProvider = ({children}) => {
    const [state ,setstate]=useState(false)
   useEffect(()=>{
        const UserData =JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
        setstate(UserData)
    },[])

    

    
    return ( 
    <AuthProvidercontaxt.Provider value={state} >
    <AuthProvidercontaxtDispatch.Provider value={setstate}>
{children}
    </AuthProvidercontaxtDispatch.Provider>
    </AuthProvidercontaxt.Provider> 
    );
}
 
export default AuthProvider;

export const useAuth = ()=>{
 return   useContext(AuthProvidercontaxt)
}
export const useAuthAction=()=>{
 return   useContext(AuthProvidercontaxtDispatch)
}