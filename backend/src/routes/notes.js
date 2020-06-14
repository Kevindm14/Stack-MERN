const { Router } = require('express')
const router = Router()
const { getNote, postNote, updateNote, deleteNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNote)
    .post(postNote)

router.route('/:id')
    .put(updateNote)
    .delete(deleteNote)

module.exports = router