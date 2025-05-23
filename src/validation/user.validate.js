import Joi from "joi";

export class UserValidation {
    constructor () {}

    static registerSchema = Joi.object({
        firstname: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required()        
    })
    
    
    static loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required()        
    })
    
    
    static UpdateSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        firstname: Joi.string().min(3),
        email: Joi.string().email(),
        password: Joi.string().min(8).max(16),
        role:  Joi.string()
    })
    
    
    
    static DeleteSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
}




