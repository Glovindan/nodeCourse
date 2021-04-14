import * as sqlite3 from 'sqlite3';
import {Database} from "sqlite3";

import * as settings from './db-settings.json';
import IDataBase from "./IDataBase";
import UserOrm from "./orm-entities/UserOrm";

class DB implements IDataBase {
    private db: Database;

    constructor() {
        this.db = new sqlite3.Database(`${__dirname}/${settings.dbName}`);

    }

    getUserByLogin(login: string) {
        return new Promise<UserOrm | null>(resolve => {
            const query = "SELECT * FROM user WHERE login = '" + login + "'";
            this.db.get(query, (err, res) => {
                if (!err) {
                    const user = new UserOrm(res.id, res.name, res.login, res.password, res.token);
                    resolve(user);
                }
            });
        });
    }
}

export default DB;