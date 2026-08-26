import { ContactRepository } from "../repositories/contact.repository";
import { Contact } from "../types/contact.interface";

export class ContactService {

    repository = new ContactRepository();

    async getAllContacts() {
        console.log("get all contacts");
        const contacts = await this.repository.findAll();
        return contacts;
    }

    async getContactById(id: number) {
        return await this.repository.findById(id);
    }

    async createContact(reqBody: Contact) {

        const contact = {
            country: reqBody.country,
            email: reqBody.email,
            name: reqBody.name,
            mobile_no: reqBody.mobile_no,
            user_id: reqBody.user_id
        };

        return await this.repository.create(contact);
    }


    async updateContact(id: number, reqBody: Contact) {
        return await this.repository.update(id, reqBody);
    }

    async deleteContact(id: number) {
        return await this.repository.delete(id);
    }
}