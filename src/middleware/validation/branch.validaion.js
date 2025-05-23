import { CustomError } from "../../utils/CustomError.js"
import { BranchValidation } from "../../validation/branch.validation.js"

export default async (req, res, next) => {
  try {

    if (req.method == "POST" && req.url == "/v1/branch/register") {
      const { error } = await BranchValidation.createrSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    if (req.method == "PUT" && req.url == "/v1/branch/update/:id") {
      const { error } = await BranchValidation.UpdateSchema.validate(req.body)
      if (error) throw new CustomError(403, error.details[0].message)
    }
    
    if (req.method == "DELETE" && req.url == "/v1/branch/delete/:id") {
      const { error } = await BranchValidation.DeleteSchema.validate(req.params.id)
      if (error) throw new CustomError(403, error.details[0].message)
    }

    next()

  } catch (error) {
    next(error)
  }
}