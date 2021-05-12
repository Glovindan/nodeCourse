import * as Express from 'express';
import {IRouter} from "express";
import IUserService from "../domain/User/IUser.service";

class Router {

    private readonly _router: IRouter = Express.Router();

    constructor(
        private readonly _userService: IUserService,
    ) {
        this._initRoutes();
    }

    get router(): IRouter {
        return this._router;
    }

    private _initRoutes() {
        this._router.get('/', (req, res) => {
            return res.send({answer: 'Hi there :)'});
        });

        this._router.get('/login/:login/:password', async (req, res) => {
            const { login, password } = req.params;
            const result = await this._userService.login(login, password);

            return res.send({
                status: Boolean(result),
                result,
            });
        });

        /* TODO::
            logout,
            registration,
            get user data,
            create channel,
            send message (another user/channel),
            get messages in channel/dialog
         */

        this._router.all('*', (req, res) => {
            return res.send({answer: 'nothing to see here...'});
        });
    }
}

export default Router;