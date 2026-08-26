"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class ContactRepository {
    async findAll() {
        const contacts = await prisma_1.default.contact.findMany();
        return contacts;
    }
    async findById(id) {
        console.log("findById");
        return await prisma_1.default.contact.findUnique({
            where: { id }
        });
    }
    async create(contact) {
        return await prisma_1.default.contact.create({
            data: contact
        });
    }
    async update(id, data) {
        return await prisma_1.default.contact.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return await prisma_1.default.contact.delete({
            where: { id }
        });
    }
}
exports.ContactRepository = ContactRepository;
