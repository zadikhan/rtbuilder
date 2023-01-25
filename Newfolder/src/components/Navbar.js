import React,{useContext} from 'react'
import { Link } from "react-router-dom"
import {UserContext} from "../App";
import logo from "../images/AKlogo.png";
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = ()=>{
    if(state){
      return(
        <>


        
<li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li class="nav-item"><Link class="nav-link active" to="/about"> Your Resume </Link></li>
        <li class="nav-item"><Link class="nav-link active" to="/contact">Contact Me</Link></li>
      


        <li class="nav-item"><Link class="nav-link active" to="/login">Login</Link></li>
        <li class="nav-item"><Link class="nav-link active" to="/signup">Registeration</Link></li>




        </>
      )}
    else{
      return(
        <>

        <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li class="nav-item"><Link class="nav-link active" to="/about"> <span>Your Resume </span></Link></li>
        <li class="nav-item"><Link class="nav-link active" to="/contact">Contact Me</Link></li>
      
        <li class="nav-item"><Link class="nav-link active" to="/logout">Logout</Link></li>
        </>
      )
    }
    }


  


  return (
    <>
        <nav className="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} className="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
    <RenderMenu/>

      </ul>
      </div>
  </div>
</nav>
    </>
  )
}

export default Navbar