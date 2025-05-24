import { Router } from "express";
import validation from '../middleware/validation/Permissio.validation.js'
import permissionController from "../controller/Permission.controller.js";
import chekToken from "../middleware/chekToken.js";



const PermissionRouter = Router()

PermissionRouter.post('/create', chekToken, validation, permission, permissionController.create)
PermissionRouter.put('/update/:id', chekToken, validation, permission, permissionController.update)
PermissionRouter.delete('/delete/:id', chekToken, validation, permission, permissionController.delete)


export default PermissionRouter