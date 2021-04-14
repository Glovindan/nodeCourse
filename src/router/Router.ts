import * as Express from 'express';
import {IRouter} from "express";

class Router {

    private readonly _router: IRouter = Express.Router();

    constructor() {
        this._router.get('/', (req, res) => {
            return res.send({ answer: 'This still working!' });
        });

        this._router.get('/do-something', (req, res) => {
            return res.send({ answer: 'now i can do anything' });
        });

        this._router.all('*', (req, res) => {
            return res.send({ answer: 'route is undefined' });
        })
    }

    get router(): IRouter {
        return this._router;
    }
}

export default Router;
