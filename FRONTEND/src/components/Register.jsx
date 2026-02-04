import { useState } from "react"
import axios from "axios"


function Register(){
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [errors , setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const userData = {
            username,email,password
        }
        try{
          const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
          console.log('response.data',response.data)
          console.log('Registression Successfull')
          setErrors({})
          setSuccess(true)
        }catch(error){
            setErrors(error.response.data)
          console.log('Registration error :',error.response.data)
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <>
        <div className="container p-6 m-2">
            <div className="p-2 m-2 w-50 text-center ml-100">
                <h2>Create an Accounts</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="w-full border border-slate-800 p-2 m-2" placeholder="Username" 
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <small>{errors.username && <div className="text-red-500">{errors.username}</div>}</small>
                    <input type="email" placeholder="Email" className="w-full border border-slate-800 p-2 m-2" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="w-full border border-slate-800 p-2 m-2"
                    value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <small>{errors.password && <div className="text-red-500">{errors.password}</div>}</small>
                    {success && <div>{alert('Cool ton messade est bon')}</div>}
                    {loading ? (
                    <button type="submit" className="border bg-blue-500 border-slate-500 p-5 text-slate-950" disabled>Please wait....</button>
                    ):(
                    <button type="submit" className="border bg-blue-500 border-slate-500 p-5 text-slate-950">Register</button>

                    )}
                </form>
            </div>
        </div>
        </>
    )
}
export default Register