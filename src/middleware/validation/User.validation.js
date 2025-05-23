import { CustomError } from "../../utils/CustomError.js"
import { UserValidation } from "../../validation/user.validate.js"

export default async (req, res, next) => {
  try {

    if (req.method == "POST" && req.url == "/v1/user/register") {
      const { error } = await UserValidation.registerSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "POST" && req.url == "/v1/user/login") {
      const { error } = await UserValidation.loginSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/user/update") {
      const { error } = await UserValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    
    if (req.method == "DELETE" && req.url == "/v1/user/delete/:id") {
      const { error } = await UserValidation.UpdateSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}