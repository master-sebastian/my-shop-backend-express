const usersModel =  require('../models/usersModel')
const jwt = require('jsonwebtoken')
const sha256 = require("crypto-js/sha256")

class AuthService {

    static async login(req, res) {
    
        const { username, password } =  req.body
        //const { username, password } =  req.query
        
        const password_cryto = sha256(password).toString()
        
        const credencials = {
            name: username, 
            password:  password_cryto
        }
        
        const validatedUser =  await usersModel.findOne(credencials)
    
        if(validatedUser !== null){
            
            jwt.sign({
                username,
                password_cryto
            },
            process.env.Secret_JWT,
            {
                expiresIn: process.env.Expires_In_JWT
            },
                (err, token)=>{
                   if(err){
                       res.status(500).json({
                           message: "Error generating token"
                       })
                   }else{
                       res.status(200).json({
                           token
                       })
                   } 
                }
            )
        }else{
            res.status(400).json({
                message: "Invalid data"
            })
        }   
    }

    static validToken(req, res){
        res.json({auth: true})
    }
}

module.exports = AuthService