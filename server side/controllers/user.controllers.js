const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const dotenv = require ("dotenv")
dotenv.config()

const welcomeUser = (req,res)=>{
    res.send('Welcome')
}
const registerUser = (req,res)=>{

    res.send('Register')
}
const signinget = (req,res)=>{
    res.send('Signin')
}
const postSignin = async (req, res) => {
    const { email, password } = req.body;

    let user;
    try {
        user = await userModel.findOne({ email: email });
        console.log(user);

        if (!user) {
            console.log("User not found, please sign up!!");
            return res.status(400).json({
                Message: "User not found, please sign up!!"
            });
        }
    } catch (error) {
        console.error('Error finding user:', error);
        return res.status(500).json({
            Message: "Internal server error"
        });
    }

    try {
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) {
            console.log("Wrong login details");
            return res.status(401).json({
                Message: "Wrong login details"
            });
        } else {
        const token = jwt.sign({user: user.email }, secret, {expiresIn : 5})
            console.log('User logged in successfully');
            return res.status(200).json({
                Message: 'User logged in successfully',
                status: true,
                token:token
            });
        }
    } catch (error) {
        console.error('Error comparing passwords:', error);
        return res.status(500).json({
            Message: "Internal server error"
        });
    }
};
const postregisterUser=async (req,res)=>{
    try {
        const { firstName, lastName, password, email } = req.body
        let user = new userModel({ firstName: firstName, lastName: lastName, password: password, email: email })
        await user.save()
        console.log("user is saved");
        console.log(req.body);
        res.send("user saved");
    } catch (err) {
        console.log(err);
        console.log("user is not saved");
        res.status(400).send("user not saved")
}}
const Dashboard = (req, res)=>{
    res.send('dashboard')
}


const VerifyUser =(req,res)=>{
    let token = (req.headers.authorization.split(" ")[1]);
    console.log(req.headers);
    jwt.verify( token, secret,(err, result)=>{
        if (err){
            res.send({message: "authenticated failed", status:false, user: err});
            console.log(err);
        }else{
            res.send({message: "authenticated user", status:true, user: result});
            console.log(result);}
    })
}





module.exports = {welcomeUser,registerUser,postregisterUser, signinget,postSignin, Dashboard, VerifyUser}
