import {Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PerfilUsuario from '../pages/PerfilUsuario';



function AppRouter() {
    return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/perfil_usuario' element={<PerfilUsuario/>}/>

        <Route path="/" element={<Navigate to="home"/>}/>
    </Routes>
    );
}

export default AppRouter;