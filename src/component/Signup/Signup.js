import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import "./Signup.css";
import { Link } from "react-router-dom";
import { signUPuser } from "../../services/Signupservice";
import { useState } from "react";
import { toast } from "react-toastify";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Name length is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
  password: Yup.string().required("Password is required"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // )
  passwordConfirm: Yup.string()
    .required("Pasword Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    ,
});
const SignupForm = () => {
  const [error,seterrr]=useState()
  const onSubmit = async (values) => {
    console.log(values);
    const { name, email, phoneNumber, password } = values;
    const UserData = {
      name,
      email,
      phoneNumber,
      password,
    };

    try {
      const { data } = await signUPuser(UserData);
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
      if(error.response && error.response.data.message){

        seterrr(error.response.data.message)
        toast.error(`${error} error`)

      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="fromContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" type="text" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="Phone Number"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password confirmation"
          type="password"
        />

        <button
          type="submit"
          disabled={!formik.isValid}

          className="btn"
          style={{ width: "100%", marginTop: "20px" }}
        >
          {" "}
          sign up
        </button>
        {error && <p style={{color:"red"}} >{error}</p>}
        <Link to="/login">
          <p style={{ color: "blue", marignTop: "10px" }}>alerady login ??</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
