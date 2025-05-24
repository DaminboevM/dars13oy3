import StudentModel from '../module/Student.module.js'
import { CustomError } from '../utils/CustomError.js'

class StudentService {
    constructor () {}

    async CreateStudent (body) {
        try {
            await StudentModel.create(body)
            return 'student succes created !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UpdateStudent (body, id) {
        try {
            const r = await StudentModel.updateOne({_id: id}, {$set: body})
            console.log(r)
            return 'student success updated !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



    async DeleteStudent (id) {
        try {
            await StudentModel.findByIdAndDelete(id)
            return 'student success deleted !'

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }

}

const studentService = new StudentService()

export default studentService