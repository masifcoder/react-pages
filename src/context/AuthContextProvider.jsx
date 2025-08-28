

import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={ {login: isLogin, setIsLogin, name: "ali"} }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider