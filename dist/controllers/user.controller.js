"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const AppError_1 = require("../utils/AppError");
const service = new user_service_1.UserService();
class UserController {
    async getAllUser(req, res, next) {
        res.setHeader("Cache-Control", "no-cache");
        try {
            const users = await service.getUsers();
            res.status(200).json({
                "message": "All users data fetched successfully",
                "status": 200,
                "data": users
            });
        }
        catch (error) {
            return next(new AppError_1.AppError("Something went wrong", 500));
        }
    }
    async getUserById(req, res, next) {
        const user = await service.getUser(Number(req.params.id));
        if (!user) {
            return next(new AppError_1.AppError("User not found", 404));
        }
        res.json(user);
    }
    async createUser(req, res, next) {
        const user = await service.createUser(req.body);
        res.status(201).json({
            "message": "User registered successfully",
            "status": 201,
            "data": user
        });
    }
    async loginUser(req, res, next) {
        const { username, password } = req.body;
        console.log(username, password);
        const user = await service.loginUser(username, password);
        console.log("loginUser controller");
        console.log(user);
        if (!user) {
            return next(new AppError_1.AppError("Invalid username or password", 401));
        }
        res.status(200).json({
            "message": "Login successful",
            "status": 200,
            "data": user
        });
    }
    async updateUser(req, res) {
        const user = service.updateUser(Number(req.params.id), req.body);
        if (!user)
            return res.status(404).json({
                "message": "User is not found",
                "status": 404
            });
        res.json(user);
    }
    deleteUser(req, res) {
        const deleted = service.deleteUser(Number(req.params.id));
        if (!deleted)
            return res.status(404).json({
                message: "User is not found"
            });
        res.json({
            message: "Deleted user is Successfully"
        });
    }
}
exports.UserController = UserController;
