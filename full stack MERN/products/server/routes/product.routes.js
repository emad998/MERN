const productsCtl = require('../controllers/products.controller')

module.exports = app => {
    app.get('/api/products', productsCtl.getAll)
    app.post('/api/products', productsCtl.create)
    app.get('/api/products/:id', productsCtl.getOne)
    app.put('/api/products/:id', productsCtl.update)
    app.delete('/api/products/:id', productsCtl.delete)
}