"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class UserRepository {
    async findAll() {
        const users = await prisma_1.default.users.findMany();
        return users;
    }
    async findById(id) {
        console.log("findById");
        return await prisma_1.default.users.findUnique({
            where: { id }
        });
    }
    async create(user) {
        return await prisma_1.default.users.create({
            data: user
        });
    }
    async update(id, data) {
        return await prisma_1.default.users.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return await prisma_1.default.users.delete({
            where: { id }
        });
    }
}
exports.UserRepository = UserRepository;
