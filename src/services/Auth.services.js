import axios from 'axios';
const URL_WS = process.env.REACT_APP_API;

const loginService = async (data)=>{
    return await axios.post(`${URL_WS}/logIn`, data);
};

const registerService = async(data)=>{
    return await axios.post(`${URL_WS}/signup`, data);
};


export {loginService, registerService};