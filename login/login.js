const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const expressSession = require('express-session');

app.use(expressSession({
    name: "sessionCookie",
    secret: "express session secret",
    resave: false,
    saveUninitialized: false
}));


const User = require("./newUser.js");
app.post('/create', (req, res)=> {
    
    let u = User.create(req.body.user, req.body.password, req.body.first, req.body.last, req.body.email);
    if (u == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(u);
});


const Secret = require("./secret.js");
const login_data = require('data-store')({ path: process.cwd() + '/login/users/users.json' });

app.post('/login', (req,res) => {
    let user = req.body.user;
    let password = req.body.password;
    
    let user_data = login_data.get(user);
    if(req.session.user == user){
        console.log(user)
        res.status(403).send("user already logged in")
        return
    }
    if (user_data == null) {
        res.status(404).send("Not found");
        return;
    }
    if (user_data.password == password) {
        //console.log("User " + user + " is now logged in!");
        req.session.user = user;
        console.log(req.session.user)
        res.json(true);
        return;
    }
    res.status(403).send("Username or Password Invalid");
});

app.get('/logout', (req, res) => {
    delete req.session.user;
    console.log(req.session.user)
    res.json(true);
})

app.get('/secret', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    res.json(Secret.getAllIDsForOwner(req.session.user));
    return;
});

app.get('/secret/:id', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.owner != req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    res.json(s);
} );

app.post('/secret', (req, res)=> {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.create(req.session.user, req.body.secret);
    if (s == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(s);
});

app.put('/secret/:id', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Not found");
        return;
    }
    if (s.owner != req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }
    s.update(req.body.secret);

    res.json(s.id);
});

app.delete('/secret/:id', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.owner != req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    s.delete();
    res.json(true);
})

const port = 3030;
app.listen(port, () => {
    console.log("User Login Example up and running on port " + port);
});
