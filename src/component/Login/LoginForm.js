import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup'
import './Login.css'
import { Link } from "react-router-dom";
const initialValues ={
    email:"",
    password:"",
    }
    const onSubmit =(value)=>{
        console.log(value);
    }
    
const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   
    password: Yup.string().required("Password is required"),
  
  });
const LoginForm = () => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
    })
    
    return ( <div className="fromContainer">
        <form>
        {/* <Input formik={formik} name="name" type="text" label="Name" /> */}
        <Input formik={formik} name="email" type="email" label="Email" />
        <Input formik={formik} name="password" type="password" label="Password" />
        <button className="btn" style={{width:"100%"}} disabled={!formik.isValid}>Login</button>
        <Link to="/signup">
        <p style={{color:'blue',marignTop:"10px"}} > go to signup</p>
        </Link>
        </form>
    </div> );
}
 
export default LoginForm;