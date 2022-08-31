const usersModel =  require('../models/usersModel')
const sha256 = require("crypto-js/sha256");

class UsersService{
    
    static async create(req, res) {
        const {name, password} = req.body;
        try{
            const user = new usersModel();
            user.name = name
            user.password = sha256(password).toString()
            const consult = await user.save()
            res.status(201).json({ consult })
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de crrar el usuario nuevo"} )  
        }
    }

    static async get(req, res) {
        try{
            const users = await usersModel.find({})
            res.status(200).json(  users )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer todos los usuarios"} )  
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const user = await usersModel.findById(id)
            console.log( user )
            res.status(200).json(  user )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el usuario por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const user = await usersModel.findByIdAndDelete(id)
            res.status(200).json(  user )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar el usuario"})
        }
    }
    
    static async resetPassword (req, res) {
        const { id, password, password_new } = req.body
        try{
            const user = await usersModel.findById(id)
            if(user !== null ){
                if(user.password === sha256(password).toString()){
                    if(password === password_new){
                        res.status(500).json(  {
                            error: "La clave actual y la nueva no pueden ser iguales"
                        } )
                    }else{
                        user.password = sha256(password_new).toString()
                        const result = await user.save()
                        res.status(200).json(result)
                    }
                }else{
                    res.status(500).json(  {
                        error: "La clave actual no es correcta para poder hacer el cambio de clave"
                    } )
                }
            }else{
                res.status(500).json(  {
                    error: "No existe el usuario"
                } )
            }
            
        }catch(e){
            res.status(500).json(  {
                error: "Ocurrio un error al tratar resetear la clave"
            } )   
        }
    }

}

module.exports = UsersService