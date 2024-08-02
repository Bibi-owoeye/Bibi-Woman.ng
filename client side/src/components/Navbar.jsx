import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/woman1.png'


const Navbar = () => {
    const navLink = [
        // {
            //     id : "1",
//     name: "Register",
//     path: "/nav/register"
// },
// {
//     id : "2",
//     name: "Login",
//     path: "/nav/signin"
// },
{
    id : "0",
    name: "New Collections",
    path: "/nav/newcollections"
},
{
    id : "1",
    name: "Women",
    path: "/nav/women"
},
{
    id : "2",
    name: "Kids",
    path: "/nav/kids"
},
{ 
    id : "3",
    name: "About us",
    path: "/about"
}
    ]

    
       
  return (
    
   <div>
   <ul className='flex justify-content-between pt-3 px-5 '>
           <div className='flex gap-5 text-[16px] mt-1'>
               <Link to='/'><img src={logo} className='w-[40px] h-[40px] rounded-5' alt="" /></Link>
           {navLink.map((link)=>(
                <li key={link.id} >
                    <Link to={link.path} className='Linkk  hover:text-black hover:text-[17px] font-bold rounded-3 p-2 px-3'>{link.name}</Link>
                </li>
            ))
            }
           </div>
           <div>
               <Link to='/nav/signin'className='Linkk text-[16px] hover:text-black hover:text-[17px] font-bold rounded-3 p-2 px-3'>Login</Link>
               <Link to='/nav/register'className='Linkk text-[16px]  hover:text-black hover:text-[17px] font-bold rounded-3 p-2 px-3'>Register</Link>
               <Link to='/'className='Linkk text-[16px]  hover:text-black hover:text-[17px] font-bold rounded-3 p-2 px-3'>Logout<img src="" alt="" /></Link>
           
           </div>
           </ul>

           
   <Outlet/>

    </div>
  )
}

export default Navbar