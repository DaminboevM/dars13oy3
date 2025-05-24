import userService from "../service/User.service.js";

class UserController {
    constructor () {}

    async register (req, res, next) {
        try {
            const result = await userService.UserRegister(req.body,req.files.img)
            res.status(201).json({status: 201, message: 'success', success: true, ...result})
        } catch (error) {
            next(error)
        }
    }



    async login (req, res, next) {
        try {
            const result = await userService.UserLogin(req.body)
            res.status(201).json({status: 201, message: 'success', success: true, ...result})
        } catch (error) {
            next(error)
        }
    }


    async update (req, res, next) {
        try {
            const result = await userService.UserUpdate(req.body, req.params.id)
            res.status(201).json({status: 201, message: 'success', success: true, data: result})
        } catch (error) {
            next(error)
        }
    }


    async delete (req, res, next) {
        try {
            const result = await userService.UserDelete(req.params.id)
            res.status(201).json({status: 201, message: 'success', success: true, data: result})
        } catch (error) {
            next(error)
        }
    }


}



const userController = new UserController()


export default userController