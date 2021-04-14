import * as Express from 'express';
class Router {
    constructor() {
        this._router = Express.Router();
        this._router.get('/', (req, res) => {
            return res.send({ answer: 'Hi there :)' });
        });
        this._router.get('/home', (req, res) => {
            return res.send({ answer: 'this is your new home' });
        });
        this._router.all('*', (req, res) => {
            return res.send({ answer: 'nothing to see here...' });
        });
    }
    get router() {
        return this._router;
    }
}
export default Router;
