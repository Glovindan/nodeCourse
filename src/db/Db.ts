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
      const query = `SELECT * FROM users WHERE token='${token}'`;
      this.db.get(query, (err, res) => {
        if (err) reject(err);

        if (!res) resolve(null);

        resolve(new UserOrm(res.id, res.name, res.login, res.password, res.token));
      })
    });
  }

  setToken(id: number, token?: string): Promise<boolean> {
    return new Promise(resolve => {
      const query = `UPDATE users SET token='${token || null}' WHERE id=${id}`;

      this.db.run(query, err => resolve(Boolean(err)));
    })
  }

  getUserByLogin(login: string) {
    return new Promise<UserOrm | null>(resolve => {
      const query = `SELECT * FROM users WHERE login='${login}'`;
      this.db.get(query, (err, res) => {
        if (!err) {
          const user = new UserOrm(res.id, res.name, res.login, res.password, res.token);
          resolve(user);
        }
      });
    });
  }

  getUserMessagesInChat(ownerId: number, receiverId: number) {
    return new Promise<MessageOrm[] | null>(resolve => {
      const query = `SELECT * FROM messages WHERE senderId=${ownerId} AND receiverId=${receiverId}`;

      this.db.all(query, (err, rows) => {
        if (err) resolve(null);

        let messages: MessageOrm[] = [];

        rows.reduce((acc, row) =>
          acc.push(
              new MessageOrm(
                  row.id,
                  row.senderId,
                  row.receiverId,
                  row.superMessageId,
                  row.text,
                  row.datetime,
                  row.isChannelMessage
              )
          ), messages);

        resolve(messages);
      })
    });
  }

  getMessage(messageId:number) {
   return new Promise<MessageOrm | null>(resolve => {
     const query = `SELECT * FROM messages WHERE messageId=${messageId}`;
     this.db.get(query, (err, res) => {
       if (!err) {
         let message = new MessageOrm(res.id, res.senderId, res.receiverId,res.superMessageId, res.text, res.datetime, res.isChannelMessage);

         resolve(message);
       }
     })
   })
  }

  addUser(name: string, login: string, password: string) {
    return new Promise<boolean>(async (resolve) => {
      const existedUser = await this.getUserByLogin(login);
      if (!existedUser) {
        const query = `INSERT INTO users(name, login, password) VALUES('${name}','${login}','${password}')`;

        this.db.run(query, (err) => resolve(Boolean(err)));
      }
      resolve(false);
    });
  }

  sendMessage(isChannelMessage: boolean, senderId: number, receiverId: number, text: string) {
    return new Promise<boolean>(resolve => {
      const query = `INSERT INTO messages(isChannelMessage, senderId, receiverId, text, datetime) 
                     VALUES('${Number(isChannelMessage)}', ${senderId}, ${receiverId}, '${text}', '${Date.now()}')`;

      this.db.run(query, (err) => resolve(Boolean(err)));
    });
  }

  createChannel(name: string) {
    return new Promise<boolean>(resolve => {
      const query = `INSERT INTO channels(name) VALUES('${name}')`;

      this.db.run(query, (err) => resolve(Boolean(err)));
    });
  };


}

export default DB;