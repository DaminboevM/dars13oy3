import { Router } from "express";
import validation from '../middleware/validation/Permissio.validation.js'
import permissionController from "../controller/Permission.controller.js";



const PermissionRouter = Router()

PermissionRouter.post('/create',validation, permissionController.create)
PermissionRouter.post('/update/:user_id',validation, permissionController.update)
PermissionRouter.post('/delete/:user_id',validation, permissionController.delete)


export default PermissionRouter