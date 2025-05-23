import { CustomError } from "../../utils/CustomError.js"
import { StudentValidation } from "../../validation/Student.validation.js"
export default async (req, res, next) => {
  try {

    if (req.method == "POST" && req.url == "/v1/student/register") {
      const { error } = await StudentValidation.createSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/student/update/:id") {
      const { error } = await StudentValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    if (req.method == "DELETE" && req.url == "/v1/student/delete/:id") {
      const { error } = await StudentValidation.DeleteSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}