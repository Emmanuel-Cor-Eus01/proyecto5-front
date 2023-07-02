import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="p-4">
            <div className="container">
            <div className="row">
                <div className="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx={12} cy={12} r={10} /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
                    <small className="d-block mb-3 text-muted">© 2023</small>
                </div>
                <div className="col-6 col-md">

                    <ul className="list-unstyled text-small">
                        <li><NavLink to="/home" className="btn">CHINA MARKETPLACE</NavLink></li>
                    </ul>
                </div>
                <div className="col-6 col-md">

                    <ul className="list-unstyled text-small">
                        <li><NavLink to="/products" className="btn">PRODUCTOS</NavLink></li>
                    </ul>
                </div>
                <div className="col-6 col-md">

                    <ul className="list-unstyled text-small">
                        <li><NavLink to="/about" className="btn">ABOUT</NavLink></li>
                    </ul>
                </div>
                <div className="col-6 col-md">

                    <ul className="list-unstyled text-small">
                        <li><NavLink to="/signup" className="btn">SIGNUP</NavLink></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;