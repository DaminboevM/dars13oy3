import { model, Schema } from "mongoose";

const StudentSchema = new Schema({
    name: String,
    group_id: {type: Schema.Types.ObjectId, ref: 'Group'}
})


const StudentModel = model('Student', StudentSchema)

export default StudentModel