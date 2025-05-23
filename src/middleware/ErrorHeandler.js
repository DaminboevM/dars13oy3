import logger from "../logs/logger.js"

const errorHandler = (error, req, res, next) => {
  if (error.status && error.status < 500) {
    return res.status(error.status).json({ message: error.message })
  } else {
    logger.error(error.message)
    return res.status(500).json({ message: "Internal server error" })
  }
}

export default errorHandler