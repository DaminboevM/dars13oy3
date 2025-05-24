import { Router } from "express";
import validation from '../middleware/validation/Students.validation.js'
import studentController from "../controller/Student.controller.js";
import chekToken from "../middleware/chekToken.js";


const StudentRouter = Router()

StudentRouter.post('/create', chekToken, validation, permission, studentController.create)
StudentRouter.put('/update/:id', chekToken, validation, permission, studentController.update)
StudentRouter.delete('/delete/:id', chekToken, validation, permission, studentController.delete)


export default StudentRouter