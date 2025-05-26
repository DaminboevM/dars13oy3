import express from 'express'
import fileUpload from 'express-fileupload'
import 'dotenv/config'
import { connectDB } from './config/Database.js'
import ErrorHeandler from './middleware/ErrorHeandler.js'
import router from './router/router.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(fileUpload())
await connectDB()
app.use('/v1', router)

app.use(ErrorHeandler)

app.listen(PORT, () => console.log(`Listening in ${PORT}-port`))