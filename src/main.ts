import * as Express from 'express';
import DB from "./db/DB";
import Router from "./router/Router";
import UserService from "./domain/User/user.service";

const app = Express();

const db = new DB();

const userService = new UserService(db);

const router = new Router(userService).router;

app.use(Express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server is running on 3000 port');
});
