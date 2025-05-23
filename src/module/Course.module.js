import { model, Schema } from "mongoose"

const CourseSchema = new Schema({
    name: String,
    branch_id: {type: Schema.Types.ObjectId, ref: 'Branch'}
})

const CourseModel = model('Course', CourseSchema)

export default CourseModel