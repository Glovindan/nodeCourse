import UserOrm from "./orm-entities/UserOrm";
import MessageOrm from "./orm-entities/MessageOrm";

interface IDataBase {
    getUserByToken(token: string): Promise<UserOrm | null>;
    getUserByLogin(login: string): Promise<UserOrm | null>;
    getUserMessages(userId: number): Promise<MessageOrm[] | null>;
    getMessage(messageId: number): Promise<MessageOrm | null>;
    addUser(name: string, login: string, password: string): Promise<boolean>;
    sendMessage(isChannelMessage: boolean, senderId:number, receiverId:number, text:string, datetime: string):Promise<boolean>;
    createChannel(name:string): Promise<boolean>;
}

export default IDataBase;