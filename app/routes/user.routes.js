const Router = require('express')
const UserController = require('../controllers/UserController')

const router = new Router

router.post('/users', UserController.createUser)
router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUser)
router.patch('/users', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

module.exports = router