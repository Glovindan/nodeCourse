class UserOrm {
    private _id: number;

    private _name: string;

    private _nickname: string;

    private _login: string;

    private _password: string;

    private _token: string | null;

    constructor(id: number, name: string, nickname: string, login: string, password: string, token: string | null) {
        this._id = id;
        this._name = name;
        this._nickname = nickname;
        this._login = login;
        this._password = password;
        this._token = token;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get nickname(): string {
        return this._nickname;
    }

    set nickname(value: string) {
        this._nickname = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get token(): string | null {
        return this._token;
    }

    set token(value: string | null) {
        this._token = value;
    }
}

export default UserOrm;