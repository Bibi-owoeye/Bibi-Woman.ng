import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    const navLink = [
{
    id : "1",
    name: "See New Products",
    path: "/newProducts"
},
{
    id : "2",
    name: "Add to cart",
    path: "/add"
}
    ]
    const  navLink2 = [
        {
            id : "1",
            name: "Go to Home",
            path: "/"
        },
        {
            id : "2",
            name: "Log Out",
            path: "/Logout"
        }
    ]
       
  return (
    
   <div>
   <ul className='d-flex justify-content-between bg-[lime] p-3 px-5 '>
           <div className='d-flex gap-5'>
           {navLink2.map((link)=>(
                <li key={link.id} >
                    <Link to={link.path} className='Linkk text-[white] hover:text-[white]'>{link.name}</Link>
                </li>
            ))
            }
           </div>
           <div className='d-flex gap-5'>
           {navLink.map((link)=>(
                <li key={link.id} >
                    <Link to={link.path} className='Linkk text-[white] hover:text-[white]'>{link.name}</Link>
                </li>
            ))
            }
           </div>
           </ul>
   <Outlet/>

    </div>
  )
}

export default Navbar