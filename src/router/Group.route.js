import { Router } from "express";
import validation from '../middleware/validation/Group.validate.js'
import groupController from "../controller/Group.controller.js";
import chekToken from "../middleware/chekToken.js";


const BranchRouter = Router()

BranchRouter.post('/create', chekToken, validation,permission, groupController.create)
BranchRouter.put('/update/:id', chekToken, validation, permission, groupController.update)
BranchRouter.delete('/delete/:id', chekToken, validation, permission, groupController.delete)


export default BranchRouter