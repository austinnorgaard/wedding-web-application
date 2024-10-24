import express from 'express'
import cors from 'cors'

import { getUser, getUsers, createUser } from './database.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
}

app.use(loggingMiddleware)

app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})

app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

app.post("/users", async (req,res) => {
    const { userName, userEmail, userPhoneNumber, userIsAdmin, userPassword } = req.body
    const user = await createUser(userName, userEmail, userPhoneNumber, userIsAdmin, userPassword)
    res.send(201)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log("The server is running on port", PORT)
})