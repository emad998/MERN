const jokesCtl = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', jokesCtl.getAll)
    app.post('/api/jokes/new', jokesCtl.create)
    app.get('/api/jokes/:id', jokesCtl.getOne)
    app.put('/api/jokes/update/:id', jokesCtl.update)
    app.delete('/api/jokes/delete/:id', jokesCtl.delete)
    app.get('/api/jokes.random', jokesCtl.random)
}


