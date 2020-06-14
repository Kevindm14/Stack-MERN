const noteController = {}
const Note = require('../models/Note')

noteController.getNote = async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
}

noteController.postNote = async (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save()
    res.send('Note saved')
}

noteController.updateNote = async (req, res) => {
    const { title, content, date, author } = req.body
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        date,
        author
    })
    res.send("Updated succefull")
}

noteController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.send("Deleted succefull")
}

module.exports = noteController