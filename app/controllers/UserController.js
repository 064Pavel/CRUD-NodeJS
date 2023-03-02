const db = require('../database/db')
class UserController{

    async createUser(req, res){
        const {nickname, pass} = req.body
        const newPerson = await db.query(`INSERT INTO users (nickname, pass) values ($1, $2) RETURNING *`, [nickname,pass])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res){
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

    async getUser(req, res){
        const id = req.params.id
        const users = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
        res.json(users.rows[0])
    }

    async updateUser(req, res){

    }

    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1', [id])
        res.json(user.rows[0])
    }

}

module.exports = new UserController()