const companyParametersModel =  require('../models/companyParametersModel')

class CompanyParametersService{
    
    static async create(req, res) {
        const {name,valor,tipo} = req.body;
        try{
            const companyParameter = new companyParametersModel();
            companyParameter.name = name
            companyParameter.valor = valor
            companyParameter.tipo = tipo
            const consult = await companyParameter.save()
            res.json({ consult })
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de crear companyParameters "} )  
        }
    }

    static async get(req, res) {
        try{
            const companyParameters = await companyParametersModel.find({})
            res.status(200).json(  companyParameters )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer todos los companyParameter"} )  
        }
    }

    static async getById(req, res) {
        const { id } = req.params
        try{
            const companyParameter = await companyParametersModel.findById(id)
            console.log( companyParameter )
            res.status(200).json(  companyParameter )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de extraer el companyParameter por el id ingresado"} )
        }
    }
    
    static async editById(req, res) {
        const { id } = req.params
        const {name,valor,tipo} = req.body;
        try{
            const companyParameter = await companyParametersModel.findById(id)
            companyParameter.name = name
            companyParameter.valor = valor
            companyParameter.tipo = tipo
            const consult = await companyParameter.save()
            res.json( consult )
        }catch(e){
            res.status(500).json(  {error: "Error al tratar de modificar el companyParameter por el id ingresado"} )
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try{
            const companyParameter = await companyParametersModel.findByIdAndDelete(id)
            res.status(200).json(  companyParameter )
        }catch(e){
            res.status(500).json({error: "Error al tratar de eliminar companyParameters"})
        }
    }

}

module.exports = CompanyParametersService