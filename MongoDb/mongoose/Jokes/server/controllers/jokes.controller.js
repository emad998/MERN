const Joke = require('../models/Joke.model')


module.exports.getAll = (req, res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    Joke.findById(req.params.id)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}


module.exports.update = (req, res) => {
    Joke.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
    .then( () => res.json({message: 'success'}))
    .catch(err => res.json(err))
}

module.exports.random = (req, res) => {
    Joke.populate('setup', 'punchline')
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}