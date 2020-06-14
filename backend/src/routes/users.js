const { Router } = require('express')
const router = Router()
const { getUser, postUser, updateUser, deleteUser } = require('../controllers/users.controller')

router.route('/')
    .get(getUser)
    .post(postUser)

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser)

module.exports = router