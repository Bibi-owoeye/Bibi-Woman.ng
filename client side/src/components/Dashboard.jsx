import React, { useEffect } from 'react'
// import Navbar from './Navbar'
import DashboardNav from './DashboardNav'
import Cards from './Cards'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  //  console.log(token);
  useEffect(() => {
  axios.get('http://localhost:3000/verify', {
    headers: {
      Authorization: `Bearers ${token}`,
     "Content-Type": "Aplication/json" ,
      Accept: "Application/json"
    }
  }).then((res)=>{
    console.log(res.data);
    if(!res.data.status){
      localStorage.removeItem("token")
      navigate('/nav/signin')
    }
  })
  }, [])

 
  
  return (
    <div>
      <DashboardNav/>
      <Cards/>
    </div>
  )
}

export default Dashboard