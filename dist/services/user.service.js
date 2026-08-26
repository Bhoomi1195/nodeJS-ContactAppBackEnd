"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
class UserService {
    constructor() {
        this.repository = new user_repository_1.UserRepository();
    }
    async getUsers() {
        console.log("getUsers");
        const users = await this.repository.findAll();
        return users;
    }
    async getUser(id) {
        return await this.repository.findById(id);
    }
    createUser(reqBody) {
        const user = {
            username: reqBody.username,
            full_name: reqBody.full_name,
            password: reqBody.password,
            user_role: reqBody.user_role,
            email: reqBody.email
        };
        return this.repository.create(user);
    }
    async loginUser(userName, password) {
        const users = await this.repository.findAll();
        console.log("loginUser service");
        console.log(users);
        const user = users.find((user) => user.username === userName && user.password === password);
        return user || null;
    }
    updateUser(id, reqBody) {
        return this.repository.update(id, reqBody);
    }
    deleteUser(id) {
        return this.repository.delete(id);
    }
}
exports.UserService = UserService;
