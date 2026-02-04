import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Authprovider from './Authprovider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {

  return (
    <> 
    <Authprovider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>}/>
      <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Authprovider>
    </>
  )
}

export default App
