import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const Checkout = () => {

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const cargarCarrito = () => {
        // logica de leer del localstorage los productoctos/items
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            setTotal(cart.reduce((total, producto) => total + producto.precio * producto.quantity, 0));
            setProducts(cart);
        }
    }



    useEffect(() => {
        document.title = 'Checkout';
        cargarCarrito();
    }, []);

    let eliminarProducto = (id) => {
        console.log("El id es: ", id);
        // Delete product from cart in local storage if quantity is 1

            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.forEach((item) => {
                if (item._id === id) {
                    if (item.quantity === 1) {
                        let newCarrrito = cart.filter((item) => item._id !== id);
                        localStorage.setItem('cart', JSON.stringify(newCarrrito));
                    } else {
                        item.quantity -= 1;
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                }
            });
            alert('Producto eliminado del carrito');
            cargarCarrito();
    }



    return (
        <div className="container-pages">
            <div className="p-4">
                <div className="row">
                    <div className="col-md-7">
                        {products.length === 0 && <div className="alert alert-warning">No hay productos en el carrito</div>}
                        {products.map((product) => {
                            return (
                                <div className="card mb-3" key={product._id}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={product.imagen} className="img-fluid rounded-start h-100" alt="test" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.nombre}</h5>
                                                <p className="card-text">{product.descripcion}</p>
                                                <h5 style={{ color: "black" }}>${product.precio}</h5>
                                                <p className="card-text"><small className="text-muted">Cantidad: {product.quantity}</small></p>
                                                <div className="text-start">
                                                    <button className="btn btn-danger btn-sm" type="button" onClick={() => eliminarProducto(product._id)}>Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {
                        products.length !== 0 &&
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Resumen de compra</h5>
                                    <p className="card-text">Tenemos envios gratuitos, aprovecha y compra nuestros productos.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Subtotal <b> {total} USD</b></p>
                                            <p>Envio <b> 0.00</b></p>
                                            <p>Total <b> {total} USD</b></p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <PayPalScriptProvider options={{ clientId:"AbIfbJloVUvlb1vm3GLLfdH3rjGu-oLlsKV8FKwBfxZG_DT21RHpH-S79kme3yO5VSNU3_B6-L-9VgWU"}}>
                                            <PayPalButtons
                                                forceReRender={[total]}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [
                                                            {
                                                                amount: {
                                                                    value: total,
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }}
                                                onApprove={(data, actions) => {
                                                    return actions.order.capture().then((details) => {
                                                        const name = details.payer.name.given_name;
                                                        alert(`Transaction completed by ${name}`);
                                                    });
                                                }}
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }

                </div>

            </div>
        </div>

    );
}

export default Checkout;