import { Router } from "express";
import validation from "../middleware/validation/branch.validaion.js";
import courseController from "../controller/Course.controller.js";
import chekToken from "../middleware/chekToken.js";


const CoourseRouter = Router()

CoourseRouter.post('/create', chekToken, validation, permission, courseController.create)
CoourseRouter.put('/update/:id', chekToken, validation, permission, courseController.update)
CoourseRouter.delete('/delete/:id', chekToken, validation, permission, courseController.delete)


export default CoourseRouter