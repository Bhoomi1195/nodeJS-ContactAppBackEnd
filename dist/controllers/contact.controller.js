"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const contact_service_1 = require("../services/contact.service");
const AppError_1 = require("../utils/AppError");
const service = new contact_service_1.ContactService();
class ContactController {
    async getAllContacts(req, res, next) {
        res.setHeader("Cache-Control", "no-cache");
        try {
            const contacts = await service.getAllContacts();
            res.status(200).json({
                "message": "All contacts fetched successfully",
                "status": 200,
                "data": contacts
            });
        }
        catch (error) {
            return next(new AppError_1.AppError("Something went wrong", 500));
        }
    }
    async getContactById(req, res, next) {
        const contact = await service.getContactById(Number(req.params.id));
        if (!contact) {
            return next(new AppError_1.AppError("Contact not found", 404));
        }
        res.json(contact);
    }
    async createContact(req, res, next) {
        const contact = await service.createContact(req.body);
        res.status(201).json({
            "message": "Contact created successfully",
            "status": 201,
            "data": contact
        });
    }
    async updateContact(req, res) {
        const contact = await service.updateContact(Number(req.params.id), req.body);
        if (!contact)
            return res.status(404).json({
                "message": "Contact is not found",
                "status": 404
            });
        res.json(contact);
    }
    async deleteContact(req, res) {
        const deleted = await service.deleteContact(Number(req.params.id));
        if (!deleted)
            return res.status(404).json({
                message: "Contact is not found"
            });
        res.json({
            message: "Deleted contact is Successfully"
        });
    }
}
exports.ContactController = ContactController;
