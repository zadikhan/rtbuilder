import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {  useNavigate } from "react-router-dom"
import screenshot from "../images/screenshot.jpg";
const Signup = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", Degree:"",College:"",Early_Education:"",Skills:"" ,Experiance:"",Projects:"",password: "", cpassword: ""
  });
  let name, value;
 
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });

  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work,Degree,College,Early_Education,Skills,Experiance,Projects, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work,Degree,College,Early_Education,Skills,Experiance,Projects, password, cpassword
      })
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("INvalid Registration");
    }
    else {

      window.alert("Successfull Registration");
      console.log("Successfull Registration");

      navigate("/login");
    }
  }
  return (
    <>
    <div className='pap'>
      <section className="signup">
        <div className="container mt-5">
          <div className="megacard">
            <div className="card">

              <h2 className="form-title">Register Here </h2>
              <div className="signup-for">
                <form method='POST' className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="Name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="text" name="name" id="name" autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your Name" />
                  </div>


                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your Email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input type="text" name="phone" id="phone" autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone Number" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="work">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="work" id="work" autoComplete="off"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="Your Work" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="Degree">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="Degree" id="Degree" autoComplete="off"
                      value={user.Degree}
                      onChange={handleInputs}
                      placeholder="Your Degree" />
                  </div>
                  
                  
                 
                  <div className="form-group">
                    <label htmlFor="College">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="College" id="College" autoComplete="off"
                      value={user.College}
                      onChange={handleInputs}
                      placeholder="Your College" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Early_Education">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="Early_Education" id="Early_Education" autoComplete="off"
                      value={user.Early_Education}
                      onChange={handleInputs}
                      placeholder="Your Early Education" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Skills">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="Skills" id="Skills" autoComplete="off"
                      value={user.Skills}
                      onChange={handleInputs}
                      placeholder="Your Skills" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Experiance">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="Experiance" id="Experiance" autoComplete="off"
                      value={user.Experiance}
                      onChange={handleInputs}
                      placeholder="Your Experiance" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Projects">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input type="text" name="Projects" id="Projects" autoComplete="off"
                      value={user.Projects}
                      onChange={handleInputs}
                      placeholder="Your Projects" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Your Password" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder=" Confirm Your Password" />
                  </div>

                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form_submit" value="Register" onClick={PostData} />

                  </div>


                </form>
                <div className="signup-image">
                  <figure>
                    <img src={screenshot} className="image" alt="signup image" />
                  </figure>
                  <Link to="/login" className="sign-up-image-link"> I am already registered</Link>
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

export default Signup