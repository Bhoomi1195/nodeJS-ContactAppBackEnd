import { UserRepository } from "../repositories/user.repository";
import { User } from "../types/user.interface";

export class UserService {

    repository = new UserRepository();

    async getUsers() {
        console.log("getUsers");
        const users = await this.repository.findAll();
        return users;
    }

    async getUser(id: number) {
        return await this.repository.findById(id);
    }

    createUser(reqBody: User) {

        const user = {
            username: reqBody.username,
            full_name: reqBody.full_name,
            password: reqBody.password,
            user_role: reqBody.user_role,
            email: reqBody.email
        };

        return this.repository.create(user);
    }

    async loginUser(userName: string, password: string) {
        const users = await this.repository.findAll();
        console.log("loginUser service");
        console.log(users);
        const user = users.find((user: any) => user.username === userName && user.password === password);
        return user || null;
    }

    updateUser(id: number, reqBody: User) {
        return this.repository.update(id, reqBody);
    }

    deleteUser(id: number) {
        return this.repository.delete(id);
    }
}