import Joi from "joi";

export class GroupValidation {
    constructor () {}

    static createSchema = Joi.object({
        name: Joi.string().required(),
        course_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        teacher_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
    
    
    static UpdateSchema = Joi.object({
        name: Joi.string(),
        teacher_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })

    
    static DeleteSchema = Joi.object({
        _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
}




