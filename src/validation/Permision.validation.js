import Joi from "joi";

export class PermissionValidation {
    constructor () {}

    static createSchema = Joi.object({
        user_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        branch_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        permissionModel: Joi.string().required(),
        actions: Joi.string().required()
    })
    
    
    static UpdateSchema = Joi.object({
        user_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        branch_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
        permissionModel: Joi.string(),
        actions: Joi.string()
    })

    
    static DeleteSchema = Joi.object({
        user_id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
    })
}



