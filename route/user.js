const user = require('../models/User')
const {Router} = require ('express')

const userRoutes = Router()


userRoutes.post('/users', async(req,res)=>{
    try {
        const data = req.body
        const insertedData = await user.create(data)
        res.send ("Your response has been submitted.We will get back to you")
        
        
    } catch (error) {
        res.send({
            error:true,
            errObj:error
        })
    }
})
 module.exports = userRoutes