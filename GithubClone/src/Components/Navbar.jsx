
import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="start">
        <div className="logo"> <img src="https://down.imgspng.com/download/0720/github_PNG83.png" alt="logo" /></div>
        <div className="searchbar"><input type='text' placeholder='search here' /></div>
        <div className="textLinks"> <h2>Pull requests</h2> <h2>Issues</h2> <h2>Marketplace</h2> <h2>Explore</h2> </div>
      </div>
      <div className="end">
        <div className="bell"><i className="fa-solid fa-bell"></i></div>
        <div className="plus"><i className="fa-solid fa-plus"></i> <i className="fa-solid fa-caret-down"></i> </div>
      </div>
    </div>
  )
}

export default Navbar