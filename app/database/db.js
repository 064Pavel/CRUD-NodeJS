const pg = require('pg')
const pool = new pg.Pool(
    {
        user: "pavel",
        password: "1q234567",
        host: "localhost",
        port: 5432,
        database: "users_nodejs"
    }
)


module.exports = pool