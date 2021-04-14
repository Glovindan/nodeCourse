"use strict";
exports.__esModule = true;
var Express = require("express");
var DB_1 = require("./db/DB");
var Router_1 = require("./router/Router");
//TODO: 1) entities with properties for db: user, message, auth, threads, channel --done
//TODO: 2) actions for user? (register, login, send message to user, send message to channel) --done
//TODO: 3) connect router with db --???
var app = Express();
var db = new DB_1["default"]();
db.getUserByLogin('admin').then(function (user) { return console.log(user); });
var router = new Router_1["default"]().router;
app.use(router);
app.listen(3000, function () {
    console.log('Server is running on 3000 port');
});
