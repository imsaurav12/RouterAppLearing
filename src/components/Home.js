import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      This is Home Page.
       <Outlet/> {/* //Taki child component render ho ske*/}
    </div> 
  )
}

export default Home
