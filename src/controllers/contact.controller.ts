import { NextFunction, Request, Response } from "express";
import { ContactService } from "../services/contact.service";
import { AppError } from "../utils/AppError";

const service = new ContactService();

export class ContactController {

    async getAllContacts(req: Request, res: Response, next: NextFunction) {
        res.setHeader(
            "Cache-Control",
            "no-cache"
        );
        try {

            const contacts = await service.getAllContacts();
            res.status(200).json({
                "message": "All contacts fetched successfully",
                "status": 200,
                "data": contacts
            });


        } catch (error) {

            return next(new AppError("Something went wrong", 500));

        }
    }

    async getContactById(req: Request, res: Response, next: NextFunction) {

        const contact = await service.getContactById(Number(req.params.id));

        if (!contact) {
            return next(new AppError("Contact not found", 404));
        }

        res.json(contact);
    }

    async createContact(req: Request, res: Response, next: NextFunction) {

        const contact = await service.createContact(req.body);

        res.status(201).json({
            "message": "Contact created successfully",
            "status": 201,
            "data": contact
        });
    }

    async updateContact(req: Request, res: Response) {

        const contact = await service.updateContact(
            Number(req.params.id),
            req.body
        );

        if (!contact)
            return res.status(404).json({
                "message": "Contact is not found",
                "status": 404
            });

        res.json(contact);
    }

    async deleteContact(req: Request, res: Response) {

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