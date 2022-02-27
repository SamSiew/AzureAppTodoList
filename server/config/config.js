const Constants = require("../utilities/constants");
const Op = require("sequelize").Op;
const path = require("path");
const fs = require("fs");

module.exports = {
    development: {
        username: Constants.mysqlUsername,
        password: Constants.mysqlPassword,
        database: Constants.mysqlDatabase,
        host: Constants.mysqlHost,
        port: Constants.mysqlPort,
        dialect: "mysql",
        operatorsAliases: Op
    },
    production: {
        username: Constants.mysqlUsername,
        password: Constants.mysqlPassword,
        database: Constants.mysqlDatabase,
        host: Constants.mysqlHost,
        port: Constants.mysqlPort,
        dialect: "mysql",
        operatorsAliases: Op,
        ssl:true,
        dialectOptions: {
            ssl: {
                encrypt: true,
                ca: fs.readFileSync(path.resolve(__dirname, "./DigiCertGlobalRootCA.crt.pem"))
            }
        }
    }
}