import UserModel from "../module/User.module.js"
import { CustomError } from "../utils/CustomError.js"

export default async (req, res, next) => {
    try {
        if(role == 'SuperAdmin') next()

        const {role, _id} = req.user
        const permisionName = req.url.split('/').at(-2)
        console.log(permisionName)
        const user = await UserModel.findOne({_id: _id, permissionModel: permisionName})
        if(!user || user.actions.includes(req.method)) throw new CustomError(403, 'You are Not allowed  !')

        next()
        
    } catch (error) {
        next(error)
    }
}