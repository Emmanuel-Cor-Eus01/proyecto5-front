const { Link } = require("react-router-dom");
const ProductDetail = () => {

    return (
        <div className="container p-5">
            <div className="col-12">
            <div className="card mb-4">
                <img src={"https://picsum.photos/seed/1/500/300"} className="card-img-top" alt='test' />

                <div className="card-body">
                    <h3>$000</h3>
                    <h4 className='card-title'>Sample</h4>
                    <p className="card-text">Description</p>
                    <Link to="/checkout" className="btn btn-primary btn-sm d-grid">Carrito</Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetail;