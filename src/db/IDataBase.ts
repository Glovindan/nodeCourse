import UserOrm from "./orm-entities/UserOrm";

interface IDataBase {
    getUserByLogin(login: string): UserOrm | null;
}

export default IDataBase;