import React from 'react'
import Logo from '../assets/Logo.png'
import home from '../assets/mdi_view-dashboard-outline.png'
import courses from '../assets/ic_outline-queue-music.png'
import Logout from '../assets/mdi_logout.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate();

  const handleCourses = ()=>{
    navigate("/courses");
  }
  return (
    <div style={{ marginTop: "15px", marginLeft: "25px", display:"flex", flexDirection:"column", alignItems:"center" }}>
      <div>
        <img src={Logo} />
      </div>
      <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap:"20px" }}>
        <button style={{backgroundColor: "#FEDFE1"}} className="flex w-full justify-center rounded-md px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <div>
            <img src={home} />
            <h1 style={{color: "#901E75"}}>Home</h1>
          </div>
        </button>
        <button onClick={handleCourses} style={{backgroundColor: "#E5E7EB"}} className="flex w-full justify-center rounded-md bg-gray-600 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <div>
            <img src={courses} />
            <h1 style={{color: "#83858B"}}>Courses</h1>
          </div>
        </button>
      </div>
      <div>
        <button>
        <div style={{marginTop:"320px"}}>
            <img src={Logout}/>
            <h1 style={{color: "#83858B"}}>Logout</h1>
          </div>
        </button>
      </div>
    </div>
  )
}
