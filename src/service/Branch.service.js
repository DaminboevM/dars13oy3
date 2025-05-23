import BranchModel from '../module/Branch.module.js'
import { CustomError } from '../utils/CustomError.js'

class BranchService {
    constructor () {}

    async CreateBranch (body) {
        try {
            await BranchModel.create(body)
            return 'branch succes created !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }


    async UpdateBranch (body, id) {
        try {
            await BranchModel.updateOne({_id: id}, {$set: body})
            return 'brannch success updated !'
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



    async DeleteBranch(id) {
        try {
            await BranchModel.findByIdAndDelete(id)
            return 'branch success deleted !'

        } catch (error) {
            throw new CustomError(error.status || 500, error.message || 'Internal server error !')
        }
    }



}
const branchService = new BranchService()

export default branchService