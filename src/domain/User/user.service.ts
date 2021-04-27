/**
 * Описание всех действий пользователя
 * register
 * login
 * authorize
 */
import IUserService from "./IUser.service";
import IDataBase from "../../db/IDataBase";
import UserEntity from "./user.entity";
import MessageEntity from "../Message/message.entity";

class UserService implements IUserService {
    constructor(private readonly _db: IDataBase) {}

    async authentication(token: string): Promise<boolean> {
        const user = await this._db.getUserByToken(token);
        return Boolean(user);
    }

    async getUser(token: string): Promise<UserEntity> {
        const userOrm = await this._db.getUserByToken(token);

        if (!userOrm) return null;

        const messagesOrm = await this._db.getUserMessages(userOrm.id);

        const messages: MessageEntity[] = [];
        for (let message of messagesOrm) {
            const messageEntity = new MessageEntity(message.id, message.text, message.datetime, message.isChannelMessage, null);

            if (message.supermessageid) {
                const superMessage = await this._db.getMessage(message.supermessageid);
                messageEntity.superMessage = new MessageEntity(superMessage.id, superMessage.text, superMessage.datetime, superMessage.isChannelMessage, null);
            }

            messages.push(messageEntity);
        }

        const userEntity = new UserEntity(userOrm.id, userOrm.name, userOrm.login, userOrm.password, userOrm.token, messages);

        return userEntity;
    }

    login(login: string, password: string): Promise<boolean> {
        return this._db.g;
    }

    registration(login: string, password: string, nickname: string): Promise<boolean> {
        return undefined;
    }

}

export default UserService;
