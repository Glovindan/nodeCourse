/**
 * Описание всех действий пользователя
 * register
 * login
 * authorize
 */
import IUserService from "./IUser.service";
import IDataBase from "../../db/IDataBase";

class UserService implements IUserService {
    constructor(private readonly _db: IDataBase) {}

    authentication(token: string): Promise<boolean> {
        return undefined;
    }

    getUser(token: string): Promise<any> {
        return undefined;
    }

    login(login: string, password: string): Promise<boolean> {
        return undefined;
    }

    registration(login: string, password: string, nickname: string): Promise<boolean> {
        return undefined;
    }

}