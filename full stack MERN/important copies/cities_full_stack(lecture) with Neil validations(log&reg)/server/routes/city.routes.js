const citiesCtl = require('../controllers/cities.controller');

const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/cities', authenticate, citiesCtl.getAll)
    app.post('/api/cities', citiesCtl.create)
    app.get('/api/cities/:id', citiesCtl.getOne)
    app.put('/api/cities/:id', citiesCtl.update)
    app.delete('/api/cities/:id', citiesCtl.delete)
    
}