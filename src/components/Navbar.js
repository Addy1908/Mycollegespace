import React from 'react'
import logo from '../images/lgoo.png'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
      <span className="navbar-brand mb-0 h1 mx-4">MyCollegeSpace</span>
    </a>
  </div>
</nav>


    </>
  )
}
