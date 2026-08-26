import { User } from "../types/user.interface";
import prisma from "../config/prisma";

export class UserRepository {

    async findAll() {
        const users = await prisma.users.findMany();
        return users;
    }

    async findById(id: number) {
        console.log("findById");
        return await prisma.users.findUnique({
            where: { id }
        });
    }

    async create(user: User) {
        return await prisma.users.create({
            data: user
        });
    }

    async update(id: number, data: any) {

        return await prisma.users.update({
            where: { id },
            data
        });

    }

    async delete(id: number) {

        return await prisma.users.delete({
            where: { id }
        });

    }
}