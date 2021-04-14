import UserOrm from "./orm-entities/UserOrm";

interface IDataBase {
    getUserByLogin(login: string): Promise<UserOrm | null>;
}

export default IDataBase;
