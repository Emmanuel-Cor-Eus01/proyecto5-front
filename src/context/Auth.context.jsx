import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);

    const toggleLogin = ()=> {
        setIsLogin(!isLogin);
    }

    return (
        <AuthContext.Provider value={{isLogin, token, toggleLogin, setToken}}>
            {children}
        </AuthContext.Provider>
    );

}