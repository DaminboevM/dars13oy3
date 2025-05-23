import { CustomError } from "../utils/CustomError.js"
import jwt from "../utils/jwt.js"
import UserModel from "../module/User.module.js"

export default async (err, req, res, next) => {
    try {
        const { token } = req.headers
        if(token) throw new CustomError(404, 'Token is required !')

        const { role, email} = jwt.verify(token)
        const user = await UserModel.findOne({email})
        if(!user) throw new CustomError(404, 'User not found !')

        req.user = user
        next()
    } catch (error) {
        if(error.name == 'TokenExpiredError') next(new CustomError(400, 'Token expire !'))
        if(error.name == 'JsonWebTokenError') next(new CustomError(400, 'Invalid token !'))
        next(error)
    }
}