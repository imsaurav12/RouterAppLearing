import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    function clickHandler(){
        // move to about page
        navigate("/about");
    }
  return (
    <div>
        <div>This is Home Page.</div>
        <button onClick={clickHandler}>Move to About Page</button>
    </div> 
  )
}

export default Home
