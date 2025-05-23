import { model, Schema } from "mongoose";

const BranchSchema = new Schema({
    name: String
})


const BranchModel = model('Branch', BranchSchema)

export default BranchModel