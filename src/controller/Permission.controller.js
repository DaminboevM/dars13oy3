import permissionService from "../service/Permission.service.js"

class PermissionController {
    constructor () {}

    async create (req, res, next) {
        try {
            const result = await permissionService.CreatePermission(req.body)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    async update (req, res, next) {
        try {
            const result = await permissionService.UpdatePermission(req.body, req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    
    async delete (req, res, next) {
        try {
            const result = await permissionService.DeletePermission(req.params.user_id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
}


const permissionController = new PermissionController()

export default permissionController