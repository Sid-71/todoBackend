const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")




const signup = async(req,res)=>{
    const {email,password} = req.body;
    const payload = req.body;
    console.log("payload",payload);
    try {
        if(!email || !password){
            res.status(404).send({
                message : "enter all details"
            })
        }

        const existingUser = await User.findOne({email : email});
        if(existingUser){
           return  res.status(404).send({
                message : "user with this email already exists",
            })
        }
    
        const hashedPassword = await bcrypt.hash(password,10);
        payload.password =hashedPassword;
        const newUser = await User.create(payload);
        // console.log("newUser",newUser);
        const token = jwt.sign({
            email : email,
            id : newUser._id
        },"todoapp");
        res.status(200).send({
            user : newUser,
            token : token
        })

       

    } catch (error) {
        res.status(400).send({
            message :error.message,
            stack : error.stack
        })
    }
}


const signin = async(req,res)=>{
    const {email,password} = req.body;
    const payload = req.body;
    
    try {
        if(!email || !password){
           return  res.status(404).send({
                message : "enter all details"
            })
        }
        const existingUser = await User.findOne({email : email});
        if(!existingUser){
           return  res.status(404).send({
                message : "user not found",
            })
        }
        const matchingPsswrod = await bcrypt.compare(password,existingUser.password);
        if(!matchingPsswrod){
           return  res.status(404).send({
                message : "password is not matching",
            })
        }
        const token = jwt.sign({
            email : email,
            id : existingUser._id
        },"todoapp");
        res.status(200).send({
            user : existingUser,
            token : token
        })

       

    } catch (error) {
        res.status(400).send({
            message :error.message,
            stack : error.stack
        })
    }
}






module.exports = {
    signup,
    signin
}