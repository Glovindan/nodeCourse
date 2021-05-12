/**
 * Описание всех действий пользователя
 * register
 * login
 * authorize
 */
import IUserService from "./IUser.service";
import IDataBase from "../../db/IDataBase";
import UserEntity from "./user.entity";

class UserService implements IUserService {
    constructor(private readonly _db: IDataBase) {}

    async authentication(token: string): Promise<boolean> {
        const user = await this._db.getUserByToken(token);
        return Boolean(user);
    }

    async getUser(token: string): Promise<UserEntity> {
        const userOrm = await this._db.getUserByToken(token);

        if (!userOrm) return null;

        return new UserEntity(
            userOrm.id,
            userOrm.name,
            userOrm.login,
            userOrm.password,
            userOrm.token
        );
    }

    async login(login: string, password: string): Promise<string | null> {
        const userOrm = await this._db.getUserByLogin(login);

        if (!userOrm) return null;

        if (password === userOrm.password) {
            const token = `${login}${Math.ceil(Date.now() / (Math.random() * 10000))}`;
            await this._db.setToken(userOrm.id, token);

            return token;
        }

        return null;
    }

    async registration(login: string, password: string, name: string): Promise<boolean> {
        const userOrm = await this._db.getUserByLogin(login);

        if (userOrm) return false;

        const newUser = await this._db.addUser(name, login, password);

        return Boolean(newUser);
    }
}

export default UserService;
