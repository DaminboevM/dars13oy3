import studentService from "../service/Student.service.js"

class StudentController {
    constructor () {}

    async create (req, res, next) {
        try {
            const result = await studentService.CreateStudent(req.body)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    async update (req, res, next) {
        try {
            const result = await studentService.UpdateStudent(req.body, req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
    
    
    async delete (req, res, next) {
        try {
            const result = await studentService.DeleteStudent(req.params.id)
            res.status(201).json({succses: true, data: result})
        } catch (error) {
            next(error)
        }
    }
}


const studentController = new StudentController()

export default studentController