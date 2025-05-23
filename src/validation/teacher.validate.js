import Joi from "joi";

export class TeaacherValidation {
    constructor () {}

    static registerSchema = Joi.object({
        user_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        password: Joi.string().min(8).max(16).required()
    })
    
    
    static loginSchema = Joi.object({
        user_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),        
        password: Joi.string().min(8).max(16).required()
    })
    
    
    static UpdateSchema = Joi.object({
        user_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        password: Joi.string().min(8).max(16)
    })
    
    
    static DeleteSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
}



