import Joi from "joi";

export class CourseValidation {
    constructor () {}

    static createrSchema = Joi.object({
        name: Joi.string().required(),
        branch_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
    
    static UpdateSchema = Joi.object({
        name: Joi.string(),
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
    
    
    static DeleteSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
}




