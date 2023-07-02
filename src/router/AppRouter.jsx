import {Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import ProductList from '../pages/products/ProductsList';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import ProductDetail from '../pages/products/ProductDetails';



function AppRouter() {
    return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail-product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<Navigate to="home"/>}/>
    </Routes>
    );
}

export default AppRouter;