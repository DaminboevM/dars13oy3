import { model, Schema } from "mongoose"

const TeacherSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    password: String
})

const TeacherModel = model('Teacher', TeacherSchema)

export default TeacherModel