import axios from "axios"
import { useEffect } from "react"
import axiosinstance from "../../axiosinstance"



const Dashboard = () => {
    const accessToken = localStorage.getItem('accessToken')
    useEffect(() =>{
        const fetchProtectedData = async ()=>{
            try{
             const response = await axiosinstance.get('/protected-view/')
             console.log('Successed', response.data)
            }catch(error){
            console.log("error feching data",error)
            }
        }
        fetchProtectedData() 
    },[])
    return (
        <div>Dasheboard</div>
    )
}
export default Dashboard