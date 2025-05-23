import bcrypt from 'bcrypt'
import UserModel from '../module/User.module.js'
import jwt from '../utils/jwt.js'
import { CustomError } from '../utils/CustomError.js'
import path from 'path'
import fs from 'fs'

class UserService {
    constructor () {}

    async UserRegister (body, img) {
        try {
            const filename = new Date().getTime() + '_' + img.name

            body.password = await bcrypt.hash(body.password,10)
            await UserModel.create({...body, img: filename})

            img.mv(path.join(process.cwd(), 'src', 'uploads', filename), (err) => {
                if(err) throw err
            })

            return {
                accessToken: jwt.sign({email: body.email}),
                refreshToken: jwt.signRef({email: body.email})
            }

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UserLogin (body) {
        try {
            const user = await UserModel.findOne({email: body.email})
            if(!user) throw new CustomError(400, 'Invalid email or password !')
            
            const deshif = await bcrypt.compare(body.password, user.password)
            if(!deshif) throw new CustomError(400, 'Invalid email or password !')

            return {
                accessToken: jwt.sign({email: body.email}),
                refreshToken: jwt.signRef({email: body.email})
            }
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UserUpdate (body) {
        try {
            if(body.password) body.password = await bcrypt.hash(body.password, 10)
            await UserModel.updateOne({_id: body._id}, { $set: body })
            return 'user success update !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



    async UserDelete(id) {
        try {
            const user = await UserModel.findById(id)
            if (!user) throw new CustomError(404, 'User not found')
            const filePath = path.join(process.cwd(), 'src', 'uploads', user.img)
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
            await UserModel.findByIdAndDelete(id)

            return 'User success deleted !'

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



}
const userService = new UserService()

export default userService