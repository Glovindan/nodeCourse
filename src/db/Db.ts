import * as sqlite3 from 'sqlite3';
import { Database } from "sqlite3";

import * as settings from './db-settings.json';
import IDataBase from "./IDataBase";
import MessageOrm from './orm-entities/MessageOrm';
import UserOrm from "./orm-entities/UserOrm";

class DB implements IDataBase {
  private db: Database;
  constructor() {
    this.db = new sqlite3.Database(`${__dirname}/${settings.dbName}`);
  }

  getUserByToken(token: string): Promise<UserOrm | null> {
    return new Promise<UserOrm|null>((resolve, reject) => {
      const query = `SELECT * FROM users WHERE token=${token}`;
      this.db.get(query, (err, res) => {
        if (err) reject(err);

        if (!res) resolve(null);

        resolve(new UserOrm(res.id, res.name, res.login, res.password, res.token));
      })
    });
  }

  getUserByLogin(login: string) {
    return new Promise<UserOrm | null>(resolve => {
      const query = `SELECT * FROM users WHERE login = ${login}`;
      this.db.get(query, (err, res) => {
        if (!err) {
          const user = new UserOrm(res.id, res.name, res.login, res.password, res.token);
          resolve(user);
        }
      });
    });
  }

  getUserMessages(userId: number) {
    return new Promise<MessageOrm[] | null>(resolve => {
      const query = `SELECT * FROM messages WHERE receiverId = ${userId}`;
      this.db.get(query, (err, res) => {
        if (!err) {
          let messages: MessageOrm[] = [];
          for(let message of res) {
            messages.push(message);
          }
          resolve(messages);
        }
      });
    });
  }

  addUser(name: string, login: string, password: string) {
    return new Promise<boolean>(async (resolve) => {
      const existedUser = await this.getUserByLogin(login);
      if (!existedUser) {
        const query = `INSERT INTO users(name, login, password) VALUES(${name},${login},${password})`;
        this.db.get(query, (err) => {
          if (!err) {
            resolve(true);
          }
          resolve(false);
        });
      }
      resolve(false);
    });
  }

  sendMessage(isChannelMessage: boolean, senderId: number, receiverId: number, text: string, datetime: string) {
    return new Promise<boolean>(resolve => {
      const query = `INSERT INTO messages(isChannelMessage, senderId, receiverId, text, datetime) 
                     VALUES(${isChannelMessage}, ${senderId}, ${receiverId}, ${text}, ${datetime})`;
      this.db.get(query, (err) => {
        if (!err) {
          resolve(true);
        }
        resolve(false);
      });
    });
  }

  createChannel(name: string) {
    return new Promise<boolean>(resolve => {
      const query = `INSERT INTO channels(name) VALUES(${name})`;
      this.db.get(query, (err) => {
        if (!err) {
          resolve(true);
        }
        resolve(false);
      });
    });
  };


}

export default DB;