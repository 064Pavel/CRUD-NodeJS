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

    }

    async updateUser(req, res){

    }

    async deleteUser(req, res){

    }

}

module.exports = new UserController()