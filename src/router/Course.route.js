import { Router } from "express";
import validation from "../middleware/validation/branch.validaion.js";
import courseController from "../controller/Course.controller.js";


const CoourseRouter = Router()

CoourseRouter.post('/create',validation, courseController.create)
CoourseRouter.post('/update/:id',validation, courseController.update)
CoourseRouter.post('/delete/:id',validation, courseController.delete)


export default CoourseRouter