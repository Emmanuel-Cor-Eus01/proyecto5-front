import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-inner">
                <h1>CHINA MARKETPLACE</h1>
                <h2>VENTA DE ARTICULOS AL MAYOREO Y MENUDEO</h2>
                <NavLink to="/products" className="btn">VER PRODUCTOS</NavLink>
            </div>
        </div>
    );
}

export default Hero;
