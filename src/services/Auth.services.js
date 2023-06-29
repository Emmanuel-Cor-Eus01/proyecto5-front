import axios from 'axios';
const URL_WS = process.env.REACT_APP_API;

const loginService = async (data)=>{
    return await axios.post(`${URL_WS}/logIn`, data);
};

const registerService = async(data)=>{
    return await axios.post(`${URL_WS}/signup`, data);
};

const perfilService = async(data)=>{
    const token = localStorage.getItem('token');
    if (!token) {
        alert("No tienes token");
        return null;
    }

    const config = {
        headers: {
            Authorization:  `Bearer ${token}`
        }
    }

    return await axios.put(`${URL_WS}/actualizar_perfil`, data, config);
};



const getPerfil = async()=>{
    const token = localStorage.getItem('token');
    if (!token) {
        alert("No tienes token");
        return null;
    }

    const config = {
        headers: {
            Authorization:  `Bearer ${token}`
        }
    }

    return await axios.get(`${URL_WS}/profile`, config);
};


export {loginService, registerService, perfilService, getPerfil};