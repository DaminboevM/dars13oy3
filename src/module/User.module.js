import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    firstname: String,
    email: { type: String, unique: true },
    password: String,
    img: String,
    role: {type: String, default: 'User'},
    createdAt: { type: Date, default: Date.now }
})

const UserModel = model('User', UserSchema)

export default UserModel