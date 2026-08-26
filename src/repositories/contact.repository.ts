import { Contact } from "../types/contact.interface";
import prisma from "../config/prisma";

export class ContactRepository {

    async findAll() {
        const contacts = await prisma.contact.findMany();
        return contacts;
    }

    async findById(id: number) {
        console.log("findById");
        return await prisma.contact.findUnique({
            where: { id }
        });
    }

    async create(contact: Contact) {
        return await prisma.contact.create({
            data: contact
        });
    }

    async update(id: number, data: any) {

        return await prisma.contact.update({
            where: { id },
            data
        });

    }

    async delete(id: number) {

        return await prisma.contact.delete({
            where: { id }
        });

    }
}