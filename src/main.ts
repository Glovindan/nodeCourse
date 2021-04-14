import * as Express from 'express';

import Db from "./db/Db";
import Router from "./router/Router";

const app = Express();

const db = new Db();

db.getUserByLogin('vasya').then(user => console.log(user));

const router = new Router().router;

app.use(router);

app.listen(3000, () => {
    console.log('Server is running on 3000 port');
});
