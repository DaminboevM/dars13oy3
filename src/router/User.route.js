import { Router } from "express";
import userController from "../controller/User.controller.js";
import validation from "../middleware/validation/User.validation.js";
import chekToken from "../middleware/chekToken.js";


const UserRouter = Router()

UserRouter.post('/register',validation, userController.register)
UserRouter.post('/login',validation, userController.login)
UserRouter.post('/update',validation,chekToken, userController.update)
UserRouter.post('/delete/:id',validation,chekToken, userController.delete)


export default UserRouter