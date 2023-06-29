import { useEffect,useState } from "react";
import { getProduct } from "../../services/Product.services";
const { Link, useParams } = require("react-router-dom");

const ProductDetail = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        console.log(id);
        getProduct(id)
        .then((response)=>{
            console.log(response);
            setProducto(response.data.detalle);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id]);

    return (
        <div className="container p-5">
            <div className="col-12">
            <div className="card mb-4">
                <img src={producto.imagen} className="card-img-top" alt='test' />

                <div className="card-body text-center">
                    <h2>${producto.precio}</h2>
                    <h3 className='card-title'>{producto.nombre}</h3>
                    <h3 className="card-text">{producto.descripcion}</h3>
                    <p className="card-text">Existentes: {producto.stock}</p>
                    <Link to="/checkout" className="btn btn-primary btn-sm d-grid">Agregar al carrito</Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetail;