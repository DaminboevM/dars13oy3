import PermisionModel from '../module/Permision.module.js'
import { CustomError } from '../utils/CustomError.js'

class PermissionService {
    constructor () {}

    async CreatePermission (body) {
        try {
            await PermisionModel.create(body)
            return 'Permission succes created !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UpdatePermission (body, id) {
        try {
            await PermisionModel.updateOne({_id: id}, {$set: body})
            return 'Permission success updated !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



    async DeletePermission(id) {
        try {
            await PermisionModel.findByIdAndDelete(id)
            return 'Permission success deleted !'

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



}
const permissionService = new PermissionService()

export default permissionService