const keys = require("../../Keys");
const { Client } = require('pg');

const client = new Client({
    host: keys.dbLoginInfo.host,
    user: keys.dbLoginInfo.user,
    password: keys.dbLoginInfo.password,
    port: keys.dbLoginInfo.port,
    database: keys.dbLoginInfo.database,
});

client.connect();

module.exports = (req, res, next) => {
    client.query('SELECT * from gear', (err, data) => {
        err ? res.locals.error = err : res.locals.data = data.rows;
        return next();
    });
};
