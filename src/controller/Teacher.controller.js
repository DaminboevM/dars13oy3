import teacherService from "../service/Teacher.service.js"

class TeacherController {
    constructor () {}

    async register (req, res, next) {
        try {
            const result = await teacherService.TeacherRegister(req.body)
            res.status(201).json({status: 201, message: 'success', success: true, ...result})
        } catch (error) {
            next(error)
        }
    }



    async login (req, res, next) {
        try {
            const result = await teacherService.TeacherLogin(req.body)
            res.status(201).json({status: 201, message: 'success', success: true, ...result})
        } catch (error) {
            next(error)
        }
    }


    async update (req, res, next) {
        try {
            const result = await teacherService.TeacherUpdate(req.body)
            res.status(201).json({status: 201, message: 'success', success: true, data: result})
        } catch (error) {
            next(error)
        }
    }


    async delete (req, res, next) {
        try {
            const result = await teacherService.TeacherDelete(req.params.id)
            res.status(201).json({status: 201, message: 'success', success: true, data: result})
        } catch (error) {
            next(error)
        }
    }


}



const teacherController = new TeacherController()


export default teacherController