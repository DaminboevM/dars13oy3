import { model, Schema } from "mongoose";

const StudentSchema = new Schema({
    name: String,
    groupId: {type: Schema.Types.ObjectId, ref: 'Group'}
})


const StudentModel = model('Student', StudentSchema)

export default StudentModel