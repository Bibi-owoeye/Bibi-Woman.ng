import React from 'react'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div className='bg-teal-400'>
        
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/nav' element={<Navbar/>}>
          <Route path = '/nav/register' element={<Register/>}/>
          <Route path = '/nav/signin' element={<Signin/>}/>
        </Route>
        <Route path = '/dashboard' element={<Dashboard/>}/>
          {/* <Route path = '/register' element={<Register/>}/> */}
          <Route path = '/Logout' element={<Signin/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default App