"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../utils/AppError");
const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
    }
    return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
