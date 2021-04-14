class UserOrm {
    private _id: number;
    private _name: string;
    private _login: string;
    private _password: string;
    private _token: string | null;


    constructor(id: number, name: string, login: string, password: string, token: string | null) {
        this._id = id;
        this._name = name;
        this._login = login;
        this._password = password;
        this._token = token;
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

export default UserOrm;

