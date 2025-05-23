import GroupModel from '../module/Group.module.js'
import { CustomError } from '../utils/CustomError.js'

class GroupService {
    constructor () {}

    async CreateGroup (body) {
        try {
            await GroupModel.create(body)
            return 'group succes created !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UpdateGroup (body, id) {
        try {
            await GroupModel.updateOne({_id: id}, {$set: body})
            return 'group success updated !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



    async DeleteGroup (id) {
        try {
            await GroupModel.findByIdAndDelete(id)
            return 'group success deleted !'

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }

}

const groupService = new GroupService()

export default groupService