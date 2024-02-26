const Joke = require('../models/jokes.models');

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.findJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ joke: allJokes })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateJoke => {
            res.json({ user: updateJoke })
        })
        .catch((err) => {
            res.json(err)
        });}
    
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}