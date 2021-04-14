import * as Express from 'express';
import DB from "./db/DB";
import Router from "./router/Router";
//TODO: 1) entities with properties for db: user, message, auth, threads, channel --done
//TODO: 2) actions for user? (register, login, send message to user, send message to channel) --done
//TODO: 3) connect router with db --???
const app = Express();
const db = new DB();
db.getUserByLogin('admin').then(user => console.log(user));
const router = new Router().router;
app.use(router);
app.listen(3000, () => {
    console.log('Server is running on 3000 port');
});
