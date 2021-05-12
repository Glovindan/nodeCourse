/**
 * Описание всех действий пользователя
 * register
 * login
 * logout
 * authorize
 */
import IUserService from "./IUser.service";
import IDataBase from "../../db/IDataBase";
import UserEntity from "./user.entity";
const bcrypt = require('bcryptjs');

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

    async getUserData(token: string): Promise<Object> {
        const userOrm = await this._db.getUserByToken(token);

        if (!userOrm) return null;

        return {
            id: userOrm.id,
            name: userOrm.name,
            login: userOrm.login
        }
    }

    async login(login: string, password: string): Promise<string | null> {
        const userOrm = await this._db.getUserByLogin(login);

        if (!userOrm) return null;

        const isMatch = await bcrypt.compare(password, userOrm.password);
        if (isMatch) {
            const token = `${login}${Math.ceil(Date.now() / (Math.random() * 10000))}`;
            await this._db.setToken(userOrm.id, token);

            return token;
        }

        return null;
    }

    async registration(login: string, password: string, name: string): Promise<boolean> {
        const userOrm = await this._db.getUserByLogin(login);

        if (userOrm) return false;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this._db.addUser(name, login, hashedPassword);

        return Boolean(newUser);
    }

    async  logout(token: string): Promise<boolean> {
        const userOrm = await this._db.getUserByToken(token);

        if (!userOrm) return false;

        userOrm.token = null;

        return true;
    }
}

export default UserService;
