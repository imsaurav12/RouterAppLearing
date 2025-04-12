import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
           <Outlet/> {/* //Taki child component render ho ske*/}
        </div> 
      )
}

export default MainHeader
