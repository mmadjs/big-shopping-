import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup'
import './Login.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../../services/Loginservice";
import { toast } from "react-toastify";
const initialValues ={
    email:"",
    password:"",
    }
   
    
const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   
    password: Yup.string().required("Password is required"),
  
  });
const LoginForm = () => {
    const [error , seterror] = useState(null)
    const onSubmit =async (value)=>{
       console.log(value);
        try {
          const {data}=await  LoginUser(value)
          seterror(null)
          toast.success(`${value.email} good`)
          console.log(data);
        } catch (error) {
            console.log(error.message);
            if(error.response && error.response.data.message){
                seterror(error.response.data.message)
                toast.error(`${value.email},${error}`)
            }
        }
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
    })
    
    return ( <div className="fromContainer">
        <form onSubmit={formik.handleSubmit}>
        {/* <Input formik={formik} name="name" type="text" label="Name" /> */}
        <Input formik={formik} name="email" type="email" label="Email" />
        <Input formik={formik} name="password" type="password" label="Password" />
        <button className="btn" style={{width:"100%"}} disabled={!formik.isValid}>Login</button>
        {error && <p style={{color:"red"}} >{error}</p>}
        <Link to="/signup">
        <p style={{color:'blue',marignTop:"10px"}} > go to signup</p>
        </Link>
        </form>
    </div> );
}
 
export default LoginForm;