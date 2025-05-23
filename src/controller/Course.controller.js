import courseService from "../service/Course.service.js"

class CourseController {
    constructor () {}

    async create (req, res, next) {
        try {
            const result = await courseService.CreateBranch(req.body)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    async update (req, res, next) {
        try {
            const result = await courseService.UpdateBranch(req.body, req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    
    async delete (req, res, next) {
        try {
            const result = await courseService.DeleteBranch(req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
}


const courseController = new CourseController()

export default courseController