import React,{useState,useContext} from 'react'
import {Link,useNavigate} from "react-router-dom";
import signin from "../images/signin.png"
import slide2 from "../images/slide4.jpg"
import slide3 from "../images/sl3.jpg"
import slide4 from "../images/sl4.jpg"



import {UserContext} from "../App";

const Login = () => {
  const {state,dispatch} = useContext(UserContext);
  const navigate = useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

const loginUser = async(e)=>{
e.preventDefault();

const res = await fetch('/signin',{
     method: "POST",
     headers: {
      "Content-Type":"application/json"
     },
     body:JSON.stringify({
     email,password
     })
});

const data = res.json();
if(data.status===400 || !data){
  window.alert("INvalid Credentials");

}
else{
  dispatch({type:"USER",payload:false})
  window.alert("Log In Successful");
  navigate("/")
}

}
  return (
    <>
    <div className='papa'>
    
    
    <h1 className='NewHeading'>Resume In Minutes </h1>
    <h2 className='NewHeading'>Register Yourself and Sign up below</h2>      
     <h2 className='NewHeading' ><Link to="/signup">REGISTER HERE </Link>    </h2>
     <div className="Ncontainer">

     <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide2} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>
<section className="signup">
        <div className="container mt-5">
          <div className="megacard">
            <div className="card">
              
                <h2 className="form-title">Sign up</h2>
                <div className="signup-for">
                <div className="signup-image">
                  <figure>
                    <img src={signin} className="image" id='Loginimage' alt="signup image" />
                  </figure>
                  
                </div>
                <div className="megalogin">              
                <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autocomplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="password" id="password" autocomplete="off"  value={password} onChange={(e)=>setPassword(e.target.value) } placeholder="Your Password" />
                  </div>

                  <Link to="/signup" className="sign-up-image-link"> Create an account</Link>
                  <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form_submit" value="log In" onClick={loginUser} />

                  </div>
</form>
<hr />
</div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Login