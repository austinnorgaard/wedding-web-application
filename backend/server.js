import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

import { getUser, getUsers, createUser, login } from './database.js'

const app = express()
app.use(cors())
app.use(express.json())

const saltRounds = 10

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
    const pass = userPassword
    await bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err || pass === "") {
            res.send({token: "Missing"})
            return;
        }
        
        bcrypt.hash(pass, salt, (err, hash) => {
            if (err) {
                res.send({token: "Missing"})
                return;
            }
            const user = createUser(userName, userEmail, userPhoneNumber, userIsAdmin, hash)
            .then(() => {
                res.send({token: "Success"})
            })
            .catch((err) => {
                if (err.errno === 1062) {
                    res.send({token: "Exists"})
                }
                else {
                    console.log("Error: " + err)
                }
            })
        });
    });
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.post("/login", async (req, res) => {
    var token = "invalid"
    const { userName, userPassword } = req.body
    bcrypt.compare(userPassword,  await login(userName).catch((err) => {console.log("Error: " + err)}), (err, result) => {
        if (err) {
            token = "invalid"
        }
    
        if (result) {
            res.send({
                token: crypto.randomBytes(16).toString('hex')
            })
        } else {
            res.send({
                token: token
            });
        }
    });
   
})

app.listen(PORT, () => {
    console.log("The server is running on port", PORT)
})