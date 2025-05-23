import { Router } from "express";
import validation from "../middleware/validation/branch.validaion.js";
import branchController from "../controller/Branch.controller.js";


const BranchRouter = Router()

BranchRouter.post('/create',validation, branchController.create)
BranchRouter.post('/update/:id',validation, branchController.update)
BranchRouter.post('/delete/:id',validation, branchController.delete)


export default BranchRouter