const controller = require('../controller/login')

module.exports = (router) => {
    router.get('/login', controller.login)
}