import * as sqlite3 from 'sqlite3';
import * as settings from './db-settings.json';
class DB {
    constructor() {
        this.db = new sqlite3.Database(`${__dirname}/${settings.dbName}`);
    }
    getUserByLogin(login) {
        return new Promise(resolve => {
            const query = "SELECT * FROM user WHERE login = '" + login + "'";
            this.db.get(query, (err, res) => {
                if (!err) {
                    resolve(res);
                }
            });
        });
    }
}
export default DB;
