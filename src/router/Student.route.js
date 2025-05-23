import { Router } from "express";
import validation from '../middleware/validation/Students.validation.js'
import studentController from "../controller/Student.controller.js";


const StudentRouter = Router()

StudentRouter.post('/create',validation, studentController.create)
StudentRouter.post('/update/:id',validation, studentController.update)
StudentRouter.post('/delete/:id',validation, studentController.delete)


export default StudentRouter