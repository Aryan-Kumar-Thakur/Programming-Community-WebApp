import React from 'react'
import { BrowserRouter  , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import POTD from '../pages/POTD'
import Contests from '../pages/Contests'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Navbar from './Navbar'
import Footer from './Footer'
import Register from '../pages/Register'


const App = () => {
  return (
    <>
    <div className='body'>
    <BrowserRouter>
    <Navbar/>
        <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/pod' element={<POTD/>}></Route>
             <Route path='/contests' element={<Contests/>}></Route>
             <Route path='/dashboard' element={<Dashboard/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/register' element={<Register/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App