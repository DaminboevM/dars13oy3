import { Router } from "express";
import validation from "../middleware/validation/branch.validaion.js";
import branchController from "../controller/Branch.controller.js";
import chekToken from "../middleware/chekToken.js";
import permission from '../middleware/pemision.js';


const BranchRouter = Router()

BranchRouter.post('/create',chekToken,validation, permission, branchController.create)
BranchRouter.put('/update/:id',chekToken ,validation, permission, branchController.update)
BranchRouter.delete('/delete/:id', chekToken, validation, permission, branchController.delete)


export default BranchRouter