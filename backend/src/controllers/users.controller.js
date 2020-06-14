const userController = {}
const User = require('../models/User')

userController.getUser = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

userController.postUser = async (req, res) => {
    const { username } = req.body
    const newUser = new User({ username })
    await newUser.save()
    res.send("User save succefull")
}

userController.updateUser = async (req, res) => {
    const { username } = req.body
    await User.findOneAndUpdate(req.params.id, { username })
    res.send("Updated succefull")
}

userController.deleteUser = async (req, res) => {
    await User.findOneAndDelete(req.params.id)
    res.send("Deleted succefull")
}

module.exports = userController