import './input.css'
const Input = ({formik,name,type,label}) => {
    return ( <div className="">
        <label htmlFor={name} >{label}</label>
        <input type={type} id={name} {...formik.getFieldProps(name)} name={name}/>
        {formik.errors[name]&& formik.touched[name]}
        <div className="error">{formik.errors[name]}</div>
    </div> );
}
 
export default Input;