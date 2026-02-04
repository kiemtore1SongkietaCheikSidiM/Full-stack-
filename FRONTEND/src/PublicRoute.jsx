import { useContext } from "react"
import {AuthContext} from './Authprovider'
import { Navigate } from "react-router-dom"


const PublicRoute = ({children}) => {
    const {isLogin} = useContext(AuthContext)
    return !isLogin ? (
        children
    ): (
        <Navigate to='/Dashboard'/>
    )
}
export default PublicRoute