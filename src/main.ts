import * as Express from 'express';
import DB from "./db/DB";
import Router from "./router/Router";
//TODO: 1)  methods for db to register, authorize, send message to user, create channel, get list of messages in chat, get list of messages in channel
const app = Express();

const db = new DB();

db.getUserByLogin('admin').then(user => console.log(user));

const router = new Router().router;

app.use(router);

app.listen(3000, () => {
    console.log('Server is running on 3000 port');
});
