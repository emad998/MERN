const citiesCtl = require('../controllers/cities.controller');

module.exports = app => {
    app.get('/api/cities', citiesCtl.getAll)
    app.post('/api/cities', citiesCtl.create)
    app.get('/api/cities/:id', citiesCtl.getOne)
    app.put('/api/cities/:id', citiesCtl.update)
    app.delete('/api/cities/:id', citiesCtl.delete)
    
}