import { CustomError } from "../../utils/CustomError.js"
import { PermissionValidation } from "../../validation/Permision.validation.js"
export default async (req, res, next) => {
  try {

    if (req.method == "POST" && req.url == "/v1/permission/register") {
      const { error } = await PermissionValidation.createSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/permission/update/:id") {
      const { error } = await PermissionValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    if (req.method == "DELETE" && req.url == "/v1/permission/delete/:id") {
      const { error } = await PermissionValidation.DeleteSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}