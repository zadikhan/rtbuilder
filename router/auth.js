const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const authenticate = require("../middleware/authenticate");

const cookieParser= require('cookie-parser');
router.get(cookieParser());
require('../db/conn');
const User = require("../model/userSchema");


router.post('/register',async(req,res)=>{
    
     const{name,email,phone,work,Degree,College,Early_Education,Skills,Experiance,Projects,password,cpassword} = req.body;

    if(!name || !email || !phone || !work ||!Degree|| !College || !Early_Education || !Skills|| !Experiance||!Projects|| !password  || !cpassword)
{
    console.log("incomplete ");
    return res.status(422).json({error:"fill the required field"});
}

try{
const userExist = await User.findOne({email:email});

if(userExist){
    return res.status(422).json({error:"Email already exist"});
}
else if(password!=cpassword){
    
    return res.status(422).json({error:"password are not matching here "});
}
else{

    const user = new User({ name, email, phone, work, Degree,College,Early_Education,Skills,Experiance,Projects, password, cpassword})

    await user.save();
    res.status(201).json({ message:"user registered successfullly"});
    
}} catch(err){
    console.log(err);
}
});
    
router.post('/signin', async(req,res)=>{
    // console.log(req.body);



    // res.json({message:"awesome tag here "})

    try{
        let token;
        const{email,password} = req.body;
        if(!email||!password){
            return res.status(400).json({error:"plz filled the data "})
        }

        const userLogin = await User.findOne({email:email});

      if(userLogin){
        
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
         });
         
        if(!isMatch){ 
            res.status(400).json({error:"Invalid credentials"});
        }
        else{
            res.json({message:"user signin Successfully"});
        }

      }
      else{
        res.json({error:"Invalid credentials"});
      }
        

    }catch(err){
        console.log(err);
    }
})




router.get('/about',authenticate, (req, res) => {
    console.log(`hello my about`);    
    res.send(req.rootUser); 
    });

router.get('/getData',authenticate,(req,res)=>{
console.log("hello get Data");
res.send(req.rootUser);
});

router.post('/contact',authenticate,async (req, res) => {
console.log("hello contact form ");

    try{
const {name,email,phone,message} = req.body;
if(!name || !email ||  !phone || !message){
    console.log("error in contact form here ");
return res.json({error:"plzz fill all details for further contact"});
}

const userContact = await User.findOne({_id:req.userID});
if(userContact){
    const userMessage = await userContact.addMessage(name,email,phone,message);
    await userContact.save();
    res.status(201).json({message:"user Contact Successfully"});
}
}
catch(error){
console.log(error);
}


})

router.get('/logout', (req, res) => {
    console.log(`hello logging you out`);
    res.clearCookie('jwtoken',{path:'/'});    
    res.status(200).send('User Log Out'); 
    });


module.exports = router;    