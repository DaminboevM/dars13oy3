import groupService from "../service/Groiup.service.js"

class GroupController {
    constructor () {}

    async create (req, res, next) {
        try {
            const result = await groupService.CreateGroup(req.body)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    async update (req, res, next) {
        try {
            const result = await groupService.UpdateGroup(req.body, req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    async delete (req, res, next) {
        try {
            const result = await groupService.DeleteGroup(req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
}


const groupController = new GroupController()

export default groupController