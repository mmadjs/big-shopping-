import axios from 'axios'
axios.defaults.baseURL="http://localhost:5000/api"

const http ={
    get:axios.get,
    post:axios.post,
    pout:axios.put,
    delet:axios.delete,
}

export default http;