import { CustomError } from "../../utils/CustomError.js"
import { TeaacherValidation } from "../../validation/teacher.validate.js"

export default async (req, res, next) => {
  try {
    
    if (req.method == "POST" && req.url == "/v1/teacher/register") {
      const { error } = await TeaacherValidation.registerSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "POST" && req.url == "/v1/teacher/login") {
      const { error } = await TeaacherValidation.loginSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/teacher/update") {
      const { error } = await TeaacherValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    
    if (req.method == "DELETE" && req.url == "/v1/teacher/delete/:id") {
      const { error } = await TeaacherValidation.UpdateSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}