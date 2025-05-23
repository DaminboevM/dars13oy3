import CourseModel from '../module/Course.module.js'
import { CustomError } from '../utils/CustomError.js'

class CourseService {
    constructor () {}

    async CreateBranch (body) {
        try {
            await CourseModel.create(body)
            return 'course succes created !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UpdateBranch (body, id) {
        try {
            await CourseModel.updateOne({_id: id}, {$set: body})
            return 'course success updated !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



    async DeleteBranch(id) {
        try {
            await CourseModel.findByIdAndDelete(id)
            return 'course success deleted !'

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



}
const courseService = new CourseService()

export default courseService