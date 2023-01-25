 import React, { useEffect, useState } from 'react'
import hero from "../images/hero.jpg"; 
import { useNavigate } from "react-router-dom"
import unknown from "../images/unknown.jpg"




const About = () => {
 const navigate = useNavigate();
 const [userData,setUserData] = useState({});


useEffect(() => {

  const callAboutPage = async()=>{
    try{
     const res = await fetch ('/about',{
      method:"GET",
      headers:{
        Accept:"application/json",    
        "Content-Type": "application/json"
      },
      credentials:"include"
    });
     
    const data = await res.json();
    console.log(data);
    setUserData(data);
  
    if(!res.status ===200 ){
      const error = new Error(res.error);
      throw error;
    }
  
  
  }
    catch(err){
      console.log("token nhi hai re");
     console.log(err);
     navigate('/login');
    }
   } 
  
  


  callAboutPage();
}, []);
const values={
'Azam':hero,

}


const value = values[userData.name]??unknown;

  return (
    <>
    <div className="container emp-profile">
      <form method='GET' action="">
        <div className="row">
          <div className="col-sm-4">
            <img src={value} className="pphoto" alt="profile photo" />
          </div>

          
          <div className="col-md-6">



          <div className="col-md-6 pl-5 about-info">
    


      <div className="row mt-3">
      <div className="col-md-6">
        <label >Name</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.name }</p>
      </div>
      </div>

      
      <div className="row">
      <div className="col-md-6">
        <label >Email</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.email }</p>
      </div>
      </div>

      
      <div className="row ">
      <div className="col-md-6">
        <label >Phone</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.phone }</p>
      </div>
      </div>

      
      <div className="row">
      <div className="col-md-6">
        <label >profession</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.work }</p>
      </div>
      </div>
    
    
      <div className="row">
      <div className="col-md-6">
        <label >Course</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.Degree }</p>
      </div>
      </div>
      

      
      <div className="row">
      <div className="col-md-6">
        <label >College</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.College }</p>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6">
        <label >Early_Education</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.Early_Education }</p>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6">
        <label >Skills</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.Skills }</p>
      </div>
      </div>

      <div className="row">
      <div className="col-md-6">
        <label >Experiance</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.Experiance }</p>
      </div>
      </div>


      <div className="row">
      <div className="col-md-6">
        <label >Projects</label>
      </div>
      <div className="col-md-6">
        <p>{ userData.Projects }</p>
      </div>
      </div>

</div>



          </div>

          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" value="Edit Profile" name='btnAddMore' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>SKILLS</p>
               <a href="instagram" target="thapa">instagram link</a><br/>
               <a href="instagram" target="thapa">linkedIn link</a><br/>
               <a href="instagram" target="thapa">facebook link</a><br/>
               <a href="instagram" target="thapa">github link</a><br/>
               <a href="instagram" target="thapa">email link</a><br/>
               <a href="instagram" target="thapa">whatsapp link</a><br/>
            </div>
          </div>
        </div>
      </form>
    </div> 
    </>
  )
}

export default About