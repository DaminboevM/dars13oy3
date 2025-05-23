import { model, Schema } from "mongoose"

const PermisionSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    branch_id: {type: Schema.Types.ObjectId, ref: 'Branch'},
    permissionModel: String,
    actions: [String],
    createdAt: { type: Date, default: Date.now }
})

const PermisionModel = model('Permision', PermisionSchema)

export default PermisionModel