import { CustomError } from "../../utils/CustomError.js"
import { CourseValidation } from "../../validation/Course.validation.js"
export default async (req, res, next) => {
  try {

    if (req.method == "POST" && req.url == "/v1/course/register") {
      const { error } = await CourseValidation.createrSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/course/update/:id") {
      const { error } = await CourseValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    if (req.method == "DELETE" && req.url == "/v1/course/delete/:id") {
      const { error } = await CourseValidation.DeleteSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}