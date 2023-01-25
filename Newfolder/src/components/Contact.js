import React,{useEffect,useState} from 'react'

const Contact = () => {
  const [userData,setUserData] = useState({name:"",email:"",phone:"",message:""});
    useEffect(() => {

        const userContact = async()=>{
          try{
           const res = await fetch ('https://rbuilder.onrender.com/getdata',{
            method:"GET",
            headers:{
              "Content-Type": "application/json"
            },
          });
           
          const data = await res.json();
          console.log(data);
          setUserData({...userData, name:data.name, email:data.email, phone:data.phone});
        
          if(!res.status ===200 ){
            const error = new Error(res.error);
            throw error;
          }
        
        
        } 
          catch(err){
            console.log("token nhi hai re");
           console.log(err);
 
          }
         } 
        
  userContact();

    }, []);
    
  const handleInputs = (e)=>{
    const name=e.target.name;
    const value = e.target.value;
    
    setUserData({ ...userData, [name]:value });

  }

   const contactForm = async (e)=>{
    e.preventDefault();

    const { name,email,phone,message } = userData;
    const res = await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    });
  
  const data = await res.json();
  if(!data){
    console.log("message not send");
  }
  else{ 
    alert("Message send successfull");
    setUserData({...userData, message:""});
  }

  }



    return (
 <>
 <div className="pa">
<div className="contact_info">
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-10 mt-5 offset-lg-1 d-flex justify-content-between">
      <div className="contact_info_item d-flex justify-content-start align-items-center">
      <img src="https://img.icons8.com/ultraviolet/40/000000/iphone-x.png" className='icony' alt="phone" />
        <div className="contact_info_content">
        
          <div className="contact_info_title">
            Phone
            <div className="contact_info_text">
                +91 8433 245 771 
            </div>
          </div>
        </div>
      </div>
      <div className="contact_info_item d-flex justify-content-start align-item-center">
      <img src="https://img.icons8.com/ultraviolet/40/000000/filled-message.png" className='icony' alt="phone" />
        <div className="contact_info_content">
        
          <div className="contact_info_title">
            Email
            <div className="contact_info_text">
            zadkhan51@gmail.com
            </div>
          </div>
        </div>
      </div>
     
      <div className="contact_info_item d-flex justify-content-start align-item-center">
      <img src="https://img.icons8.com/ultraviolet/40/000000/address.png" alt="phone" className='icony' />
        <div className="contact_info_content">
        
          <div className="contact_info_title">
            Address
            <div className="contact_info_text">
              lichi bagh quila Bareilly
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </div>
</div>

</div>


<div className="contact_form">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="contact_form_container py-5">
          <div className="contact_form_title">
          <h3>Get In Touch</h3>  
          </div>
          <form method="POST" id="cohhhhhntact_form">
            <div className="contact_form_name d-flex justify-content-between align-items-between">
              <input type="text" id='contact_form_name' onChange={handleInputs} className='contact_form_name input_field' value={userData.name} placeholder='Your Name' name="name" required="true" />
              <input type="email" id='contact_form_email' onChange={handleInputs} className='contact_form_email input_field' value={userData.email} placeholder='Your Email' name="email" required="true" />
              <input type="number" id='contact_form_phone' onChange={handleInputs} className='contact_form_phone input_field' value={userData.phone} placeholder='Your Phone Number' name="phone" required="true" />

            
            
            </div>
            <div className="contact_form_text mt-6">
              <textarea className="text_field contact_form_message" onChange={handleInputs} value={userData.message} placeholder='Message' name="message" cols="120" rows="6"></textarea>
            </div>
            <div className="contact_form_button">
              <button type='submit' className='button contact_submit_buttonbv ' onClick={contactForm} >Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
 </>
)
}

export default Contact