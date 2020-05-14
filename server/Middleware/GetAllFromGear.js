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
    const query= "SELECT gear_items.id, gear_items.item_name, gear_categories.category_name, gear_items.notes FROM gear_items INNER JOIN gear_categories on gear_items.category_id=gear_categories.id;";
    res.locals.client.query(query, (err, data) => {
        err ? res.locals.error = err : res.locals.data = data.rows;
        return next();
    });
};
