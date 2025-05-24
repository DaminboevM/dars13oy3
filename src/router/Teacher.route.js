import { Router } from "express";
import chekToken from "../middleware/chekToken.js";
import teacherController from "../controller/Teacher.controller.js";
import validation from '../middleware/validation/Teacher.validation.js'


const TeacherRouter = Router()

TeacherRouter.post('/register',validation, teacherController.register)
TeacherRouter.post('/login',validation, teacherController.login)
TeacherRouter.put('/update', chekToken, validation, permission, teacherController.update)
TeacherRouter.delete('/delete/:id', chekToken, validation, permission, teacherController.delete)


export default TeacherRouter