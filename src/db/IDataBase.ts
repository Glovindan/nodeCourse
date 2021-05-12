import UserOrm from "./orm-entities/UserOrm";
import MessageOrm from "./orm-entities/MessageOrm";

interface IDataBase {
    getUserByToken(token: string): Promise<UserOrm | null>;
    getUserByLogin(login: string): Promise<UserOrm | null>;
    getUserMessagesInChat(ownerId: number, chatId: number, isChannel: boolean): Promise<MessageOrm[] | null>;
    getMessage(messageId: number): Promise<MessageOrm | null>;
    addUser(name: string, login: string, password: string): Promise<boolean>;
    sendMessage(isChannelMessage: boolean, senderId: number, receiverId: number, text: string): Promise<boolean>;
    createChannel(name: string): Promise<boolean>;
    setToken(id: number, token?: string): Promise<boolean>;
}

export default IDataBase;