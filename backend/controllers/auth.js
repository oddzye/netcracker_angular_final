const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');
const mongoConnection = require('../middleware/mongoConnection');

module.exports.login = (req, res) => {
    mongoConnection(async (db) => {
        const candidate = await db.collection("users").findOne({email: req.body.email});

        if (candidate) {
            const isPasswordsEqual = req.body.password === candidate.password;
            if (isPasswordsEqual) {
                //generate token 
                const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate._id
                }, keys.jwt, {expiresIn: 3600});

                res.status(200).json({
                    token: `Bearer ${token}`
                })
            }
            else {
                res.status(401).json({
                    message: 'Вы ввели неверный пароль, повторите попытку'
                })
            }
        }
        else {
            res.status(404).json({
                message: 'Пользователь с таким email не существует'
            })
        }
    })
}

module.exports.register = (req, res) => {
    // mongoConnection((db) => {

    // })
     mongoConnection(async (db) => {
        const candidate = await db.collection("users").findOne({email: req.body.email});
        console.log(candidate);
        if (candidate) {
            res.status(409).json({
                message: "Пользователь с таким email уже существует"
            })
        }   
        else {
       const user = await db.collection("users").insert(new User({
            email: req.body.email,
            password: req.body.password
        }), (err, result) => {
            if (err) console.log(`Error register user, ${err}`);
            console.log("User register result ", result);
            res.status(201).json(user);
        })
        }    
    })
}