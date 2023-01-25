import React,{useState,useEffect} from 'react'
import backg from "../images/backg.jpg"
const Home = () => {

  const [userName,setUserName] = useState('');
  const [show,setShow] = useState(false);
  useEffect(() => {

        const userHomePage = async()=>{
          try{
           const res = await fetch ('/getdata',{
            method:"GET",
            headers:{
              "Content-Type": "application/json"
            },
          });
           
          const data = await res.json();
          console.log(data);
          setUserName(data.name);
          setShow(true);        
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
        
  userHomePage();

    }, []);
    


  return (
    <>
        <div className="home-page ">
        <img src={backg} className="Background" />
  
          <div className="homepg " id='homep'>
          <p id="wel">  WELCOME</p>

                        <h1>{userName}</h1>
        <h2>{show?'Hope that you will love this site ':'Welcome to the AK Resume builder'}</h2>
          </div>

    </div>
</>
)
}

export default Home