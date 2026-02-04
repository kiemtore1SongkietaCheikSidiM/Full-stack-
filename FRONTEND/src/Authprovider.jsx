import { useState,useContext, createContext } from "react"
// Create the context
const AuthContext = createContext()



function Authprovider({children}){
    const [isLogin, setIsLogin] = useState(
        !!localStorage.getItem('accessToken')
    )
    return(
        <AuthContext.Provider value={{isLogin,setIsLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
export default Authprovider
export {AuthContext}