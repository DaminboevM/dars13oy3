import { model, Schema } from "mongoose"

const GroupSchema = new Schema({
    name: String,
    course_id: {type: Schema.Types.ObjectId, ref: 'Course'},
    teacher_id: {type: Schema.Types.ObjectId, ref: 'Teacher'}
})

const GroupModel = model('Group', GroupSchema)

export default GroupModel