import { Router } from "express";
import validation from '../middleware/validation/Group.validate.js'
import groupController from "../controller/Group.controller.js";


const BranchRouter = Router()

BranchRouter.post('/create',validation, groupController.create)
BranchRouter.post('/update/:id',validation, groupController.update)
BranchRouter.post('/delete/:id',validation, groupController.delete)


export default BranchRouter