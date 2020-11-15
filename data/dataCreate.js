const express = require('express');

const app = express();

const StudySpot = require('./db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/data', (req, res) => {
    res.json(StudySpot.getAllIDs());
    return;
});

app.get('/data/:id', (req, res) => {
    let s = StudySpot.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Spot not found");
        return;
    }
    res.json(s);
} );

app.post('/book', (req, res)=> {
    let {id, name, wouldStudy, rating, comments} = req.body;

    let s = StudySpot.create(id, name, wouldStudy, rating, comments);
    if (s == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(b);
});

app.put('/book/:id', (req, res) => {
    let s = StudySpot.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Spot not found");
        return;
    }

    let {id, name, wouldStudy, rating, comments} = req.body;
    s.id = id;
    s.name = name;
    s.wouldStudy = wouldStudy;
    s.rating = rating;
    s.comments = comments;
    s.update();

    res.json(s);
});

app.delete('/book/:id', (req, res) => {
    let s = StudySpot.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Spot not found");
        return;
    }
    s.delete();
    res.json(true);
})

const port = 3030;
app.listen(port, () => {
    console.log("Tutorial1 up and running on port " + port);
});