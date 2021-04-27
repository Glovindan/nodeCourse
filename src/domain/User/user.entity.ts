import MessageEntity from "../Message/message.entity";

class UserEntity {
    private _id: number;
    private _name: string;
    private _login: string;
    private _password: string;
    private _token: string | null;
    private _messages: MessageEntity[] = [];

    constructor(id: number, name: string, login: string, password: string, token: string | null, messages?: MessageEntity[]) {
        this._id = id;
        this._name = name;
        this._login = login;
        this._password = password;
        this._token = token;
        this._messages = messages || [];
    }

    get messages(): MessageEntity[] {
        return this._messages;
    }

    set messages(value: MessageEntity[]) {
        this._messages = value;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }

    get token(): string | null {
        return this._token;
    }

    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set login(value: string) {
        this._login = value;
    }

    set password(value: string) {
        this._password = value;
    }

    set token(value: string | null) {
        this._token = value;
    }
}

export default UserEntity;
