import express from "express"
import bodyParser from "body-parser"
import User from "./user"
import pgpoolClient from "./database"

const app = express()

app.use(bodyParser.json())

app.post('/signup', async (req, res, next) => {
    const { username, password } = req.body
    try {
        await User.create({ username: username, password: password })
        return res.status(201).json({ message: 'success' })
    }
    catch (err) {
        return res.status(500).json({ message: 'failure' })
    }
})

app.post('/login', async (req, res, next) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ where: { username: username } })
        if (!user) {
            return res.status(404).json({ message: 'not found' });
        }
        if (password == user.get('password'))
            return res.status(201).json({ message: 'success' })
        return res.status(403).json({ message: 'wrong_pwd' })
    }
    catch (err) {
        return res.status(500).json({ message: 'failure' })
    }
})

pgpoolClient.authenticate().then(() => { app.listen(5000, () => User.sync()) })