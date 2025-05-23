import winston from "winston"
import path from 'path'

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} - ${level.toUpperCase()}: ${message}`
    })
  ),
   transports: [new winston.transports.File({filename: path.join("src", "logs", "error.log")})]
})

export default logger