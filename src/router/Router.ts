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
            const {login, password} = req.params;
            const result = await this._userService.login(login, password);

            return res.send({
                status: Boolean(result),
                result,
            });
        });

        this._router.get('/getUserData/:token', async (req, res) => {
            const {token} = req.params;
            const result = await this._userService.getUserData(token);

            return res.send({
                status: Boolean(result),
                result,
            })
        });

        this._router.post('/logout', async (req, res) => {
            const {token} = req.body;
            const result = await this._userService.logout(token);

            return res.send({
                status: Boolean(result),
                result,
            });
        });

        this._router.post('/registration', async (req, res) => {
            const {login, password, name} = req.body;
            const result = await this._userService.registration(login, password, name);

            return res.send({
                status: Boolean(result),
                result,
            })
        });

        //CreateChannel


        //Send message

        //Get messages

        /* TODO::
            logout,++
            registration,++
            get user data,++
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