import { Link,useNavigate } from "react-router-dom"
import { AuthContext } from "../Authprovider"
import { useContext } from "react"


export default function Header(){
    const navigate = useNavigate()
    const {isLogin,setIsLogin} = useContext(AuthContext)
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsLogin(false)
        console.log('Loggout success')
        navigate('/Login')
    }
    return(
        <>
        <nav className="flex justify-between space-y-40 pt-2 m-2 pl-2 text-2xl">
            <Link to="/" className="">Stok Prediction Portal</Link>
            <div>
                {isLogin ? (
                    <div>
                        <Link to="/Dashboard" className="text-slate-100 bg-blue-600 border border-slate-900">Dashboard</Link>
                    <Link to="/" className="text-red-800 border border-slate-800 bg-slate-200 hover:bg-slate-500" onClick={handleLogout}>Logout</Link>
                    </div>
                ):(
                    <div>
                 <Link to="/Login" className="text-green-300 border mr-2 border-green-500 hover:bg-green-300 hover:text-slate-700">Login</Link>
                 <Link to="/register" className="bg-blue-400 hover:bg-blue-700 hover:text-slate-900 text-slate-600 border border-slate-700">Register</Link>
                   </div>
                )}
                </div>
        </nav>
        </>
    )
}