import { CustomError } from "../../utils/CustomError.js"
import { GroupValidation } from '../../validation/Group.validation.js'
export default async (req, res, next) => {
  try {

    if (req.method == "POST" && req.url == "/v1/group/register") {
      const { error } = await GroupValidation.createSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/group/update/:id") {
      const { error } = await GroupValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    if (req.method == "DELETE" && req.url == "/v1/group/delete/:id") {
      const { error } = await GroupValidation.DeleteSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}