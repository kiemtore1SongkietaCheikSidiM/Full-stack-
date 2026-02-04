import axios from "axios"





const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosinstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
    }
})

// Request Intercepteur
axiosinstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }

)
 // Response Intercepteur
axiosinstance.interceptors.response.use(
    function(response){
        return response
    },
    // Handle failed response
    async function(error){
     const originalRequest = error.config
     if(error.response.status === 401 && !originalRequest.retry){
        originalRequest.retry = true
        const refreshToken = localStorage.getItem('refreshToken')
        try{
        const response = await axiosinstance.post('/token/refresh/', {refresh: refreshToken})
        console.log('New access token===>',response.data.access)
        localStorage.setItem('accessToken',response.data.access)
        originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
        return axiosinstance(originalRequest)
        }catch(error){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/Login'
        }
     }
    }
)

export default axiosinstance