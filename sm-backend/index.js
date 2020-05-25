const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'pass2database',
        database: 'smart_brain',
        port: '5432'

    }
});

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    db.select('*').from('login')
        .then(users => {
            res.json(users)
        })
});

app.post("/signin", (req, res) => {
    db.select('*').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            console.log(data)
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then(user => {
                        res.json(user[0])
                    })
                    .catch(err => res.json('no such user'))

            } else {
                res.json('no non')
            }
        })

});

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        email: loginEmail[0],
                        name: name,
                        joined: new Date()
                    }).then(user => {
                        res.json(user[0])
                    });
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch(err => console.log(err))

});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;

    db.select('*').from('users').where({
        id: id
    }).then(user => {
        if (user.length) {
            res.json(user)
        } else {
            res.status(400).json('not found')
        }
    })

});

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users')
        .where('id', '=', id)
        .increment('entries')
        .returning('entries')
        .then(entries => console.log(entries))
});

//bcrypt testing

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3005, () => {
    console.log('listening')
})