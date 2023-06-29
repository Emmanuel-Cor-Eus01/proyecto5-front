import axios from 'axios';
const URL_WS = process.env.REACT_APP_API;

const listProductsService = async ()=>{
    return await axios.get(`${URL_WS}/Productos`);
};

const getProduct = async (id)=>{
    return await axios.get(`${URL_WS}/Productos?id=${id}`);
};

export {listProductsService, getProduct};