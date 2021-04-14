import UserOrm from "./orm-entities/UserOrm";
import MessageOrm from "./orm-entities/MessageOrm";

interface IDataBase {
    getUserByLogin(login: string): Promise<UserOrm| null>;
    getUserMessages(userId: number): Promise<MessageOrm[]| null>;

    authorize(login: string, password: string): Promise<boolean>;
    register(name: string, login: string, password: string): Promise<boolean>;
    sendMessage(isChannelMessage: boolean, senderId:number, receiverId:number, text:string, datetime: string):Promise<boolean>;
    createChannel(name:string):Promise<boolean>;
}

export default IDataBase;