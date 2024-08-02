import React from 'react'
import logo from '../assets/woman1.png'
import Navbar from './Navbar'


const Home = () => {
  return (
    <>
      <Navbar/>
      <div>
           <div className='flex gap-6 justify-between'>
            {/* <div> <img  src={logo}alt="" className='w-[450px] h-[470px]' /></div>       */}
            <div className='border-red-500 my-auto  ml-40'>
                <h1 className='text-5xl mt-[30px] mx-auto'>Make your <span className='text-red-500'>Fashion</span><br />Look More Perfect <br /><span className='text-red-500'>&</span> Attractive </h1>
                <p className='text-2 my-6'>You can Explore Any shop Many Different <br /> Collection From Various Brand Here </p>
                <button className='border bg-red-500 rounded-full text-white p-2 px-4'>Start Shopping</button>
            </div>
            <div> <img  src={logo}alt="" className='w-[710px] h-[520px]' /></div>

           </div>   
           </div>
    </>
  )
}

export default Home