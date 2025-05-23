import branchService from "../service/Branch.service.js";

class BranchController {
    constructor () {}

    async create (req, res, next) {
        try {
            const result = await branchService.CreateBranch(req.body)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    async update (req, res, next) {
        try {
            const result = await branchService.UpdateBranch(req.body, req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    
    async delete (req, res, next) {
        try {
            const result = await branchService.DeleteBranch(req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
}


const branchController = new BranchController()

export default branchController