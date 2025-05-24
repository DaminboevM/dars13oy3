import TeacherModel from "../module/Teacher.module.js"
import { CustomError } from "../utils/CustomError.js"
import bcrypt, { compare } from 'bcrypt'
import jwt from "../utils/jwt.js"

class TeacherService {
    constructor () {}

    async TeacherRegister (body) {
        try {
            body.password = await bcrypt.hash(body.password, 10)
            await TeacherModel.create(body)
            return {
                accessToken: jwt.sign({user_id: body.user_id}),
                refreshToken: jwt.signRef({user_id: body.user_id})
            }
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
    
    
    
    async TeacherLogin (body) {
        try {
            const teacher = await TeacherModel.findOne({user_id: body.user_id})
            if(!teacher) throw new CustomError(404, 'User not found')

            const deshif = await compare(body.password, teacher.password)
            if(!deshif) throw new CustomError(400, 'Invalid user_id or password !')
            return {
                accessToken: jwt.sign({user_id: body.user_id}),
                refreshToken: jwt.signRef({user_id: body.user_id})
            }
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
    
    
    async TeacherUpdate (body) {
        try {
            const teacher = await TeacherModel.findOne({user_id: body.user_id})
            if(!teacher) throw new CustomError(404, 'User not found')

            if(body.password) body.password = await bcrypt.hash(body.password, 10)
            await TeacherModel.updateOne({_id: body._id}, { $set: body })

            return 'teacher succses update'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }
    
    
    async TeacherDelete (id) {
        try {
            const teacher = await TeacherModel.findOne({user_id: id})
            if(!teacher) throw new CustomError(404, 'User not found')

            await TeacherModel.findByIdAndDelete(id)

            return 'teacher succses deleted !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


}


const teacherService = new TeacherService()

export default teacherService