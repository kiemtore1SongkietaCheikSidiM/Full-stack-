import axios from "axios"
import { useContext, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../Authprovider"



function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading , setLoaging] = useState(false)
    const navigate = useNavigate()
    const [errors , setErrors] = useState('')
    const {isLogin,setIsLogin} = useContext(AuthContext)
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoaging(true)
        const userData = {
            username,password
        }
        console.log('userdata=>', userData)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
            localStorage.setItem('accessToken',response.data.access)
            localStorage.setItem('refreshToken',response.data.refresh)
            console.log('loggin successfully')
            setIsLogin(true)
            navigate('/')
        }catch(error){
         console.error('Invalide Credential')
         setErrors('Invalide Credential')
        }finally{
            setLoaging(false)
        }

    }
    return (
        <>
        <div>
            <div className="container p-6 m-2">
            <div className="p-2 m-2 w-50 text-center ml-100">
                <h2>Login to our portal</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" className="w-full border border-slate-800 p-2 m-2" placeholder="Username" 
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" className="w-full border border-slate-800 p-2 m-2"
                    value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    {errors && <div className="text-red-800">{errors}</div>}
                    {loading ? (
                    <button type="submit" className="border bg-blue-500 border-slate-500 p-5 text-slate-950" disabled>Loging in...</button>
                    ):(
                    <button type="submit" className="border bg-blue-500 border-slate-500 p-5 text-slate-950">Login</button>

                    )}
                </form>
            </div>
        </div>
        </div>
        </>
    )
}
export default Login