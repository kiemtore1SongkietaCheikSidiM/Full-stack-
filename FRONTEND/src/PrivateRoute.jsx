import { useContext } from "react"
import {AuthContext} from './Authprovider'
import { Navigate } from "react-router-dom"


const PrivateRoute = ({children})=> {
    const {isLogin} = useContext(AuthContext)
    return isLogin ? (
        children
    ): (
        <Navigate to="/Login" />
    )
}
export default PrivateRoute