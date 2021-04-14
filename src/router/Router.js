"use strict";
exports.__esModule = true;
var Express = require("express");
var Router = /** @class */ (function () {
    function Router() {
        this._router = Express.Router();
        this._router.get('/', function (req, res) {
            return res.send({ answer: 'Hi there :)' });
        });
        this._router.get('/home', function (req, res) {
            return res.send({ answer: 'this is your new home' });
        });
        this._router.all('*', function (req, res) {
            return res.send({ answer: 'nothing to see here...' });
        });
    }
    Object.defineProperty(Router.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    return Router;
}());
exports["default"] = Router;
