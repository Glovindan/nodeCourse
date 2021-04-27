import UserEntity from "./user.entity";

interface IUserService {
    registration(login: string, password: string, nickname: string): Promise<boolean>;
    login(login: string, password: string): Promise<boolean>;
    authentication(token: string): Promise<boolean>;

    getUser(token: string): Promise<UserEntity>; // Promise<UserDTO>
}

export default IUserService;
