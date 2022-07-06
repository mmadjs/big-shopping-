import { object } from "yup";
import Layout from "../layot/layot";
import { useAuth } from "../providers/Authprovider";
import { Logouthttp } from "../services/Logout";
import {LoginUser} from '../services/Loginservice'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
   const navigate= useNavigate()
    const userdata = useAuth()

    const LogOut = ()=>{
        console.log('click');
        localStorage.removeItem('authState')
        navigate('/')
        window.location.reload()

    }
    
    
    console.log("userdata",userdata.email);
    return (
        <Layout>
         <div className="profile">
        profile
        <h2>name:{userdata.name}</h2>
        <h2>email:{userdata.email}</h2>
        <h2>phoneNumber:{userdata.phoneNumber}</h2>
        <button onClick={LogOut} >log out</button>
    </div> 
    </Layout>);
}
 
export default Profile;