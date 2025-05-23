import { Router } from "express";
import UserRouter from "./User.route.js";
import TeacherRouter from "./Teacher.route.js";
import GrooupRouter from "./Branch.route.js";
import BranchRouter from "./Branch.route.js";
import StudentRouter from "./Student.route.js";
import PermissionRouter from "./Permission.route.js";
import CoourseRouter from "./Course.route.js";


const router = Router()

router.use('/user', UserRouter)
router.use('/teacher', TeacherRouter)
router.use('/branch', BranchRouter)
router.use('/group', GrooupRouter)
router.use('/student', StudentRouter)
router.use('/permission', PermissionRouter)
router.use('/course', CoourseRouter)

export default router