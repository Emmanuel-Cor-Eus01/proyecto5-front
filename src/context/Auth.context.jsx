import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState("None User");

    useEffect(() => {

        const initialUser = JSON.parse(localStorage.getItem("userInfo")) || null;
        const initialToken = localStorage.getItem("token") || null;

        setUserInfo(initialUser);
        setToken(initialToken);
        setIsLogin(initialToken ? true : false);
    }, []);

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }

    const login = (tkn) => {
        // que hacemos para establecer el login
        setIsLogin(true);
        const token_decoded = jwt_decode(tkn);
        const userInfoRaw = {
            nombre: token_decoded.data.nombre,
            email: token_decoded.data.email,
        };

        setUserInfo(userInfoRaw);
        setToken(tkn);

        window.localStorage.setItem("userInfo", JSON.stringify(userInfoRaw));
        window.localStorage.setItem("token", tkn);

    }

    const logout = () => {
        setIsLogin(false);
        setUserInfo(null);
        setToken(null);
        window.localStorage.removeItem("userInfo");
        window.localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ isLogin, token, toggleLogin, setToken, login, logout, userInfo }}>
            {children}
        </AuthContext.Provider>
    );

}