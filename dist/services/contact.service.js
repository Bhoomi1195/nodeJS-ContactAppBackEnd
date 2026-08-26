"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contact_repository_1 = require("../repositories/contact.repository");
class ContactService {
    constructor() {
        this.repository = new contact_repository_1.ContactRepository();
    }
    async getAllContacts() {
        console.log("get all contacts");
        const contacts = await this.repository.findAll();
        return contacts;
    }
    async getContactById(id) {
        return await this.repository.findById(id);
    }
    async createContact(reqBody) {
        const contact = {
            country: reqBody.country,
            email: reqBody.email,
            name: reqBody.name,
            mobile_no: reqBody.mobile_no,
            user_id: reqBody.user_id
        };
        return await this.repository.create(contact);
    }
    async updateContact(id, reqBody) {
        return await this.repository.update(id, reqBody);
    }
    async deleteContact(id) {
        return await this.repository.delete(id);
    }
}
exports.ContactService = ContactService;
