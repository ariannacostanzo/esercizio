/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }
    const logout= () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            login, 
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth = () => {
    const value = useContext(AuthContext);
    if (value === undefined) {
      throw new Error("Non sei dentro all'auth Provider");
    }
    return value;
}



export {AuthProvider, useAuth};