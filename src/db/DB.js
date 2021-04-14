"use strict";
exports.__esModule = true;
var sqlite3 = require("sqlite3");
var settings = require("./db-settings.json");
var DB = /** @class */ (function () {
    function DB() {
        this.db = new sqlite3.Database(__dirname + "/" + settings.dbName);
    }
    DB.prototype.getUserByLogin = function (login) {
        var _this = this;
        return new Promise(function (resolve) {
            var query = "SELECT * FROM user WHERE login = '" + login + "'";
            _this.db.get(query, function (err, res) {
                if (!err) {
                    resolve(res);
                }
            });
        });
    };
    return DB;
}());
exports["default"] = DB;
