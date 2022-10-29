import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: "application.log"
        }),
        new winston.transport.File({
            level: "error",
            filename: "application-error.log"
        }),
    ]
});

logger.info("Hello World");
logger.info("Hello World");
logger.info("Hello World");
logger.info("Hello World");
logger.error("Hello error");
logger.error("Hello error");
logger.error("Hello error");