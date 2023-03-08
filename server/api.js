const {getUsers, getUser, updateUser, getLogs, saveLog, getFeedbacks, saveFeedback, saveUser, getSupports, saveSupport,
    saveWords, getWords, getLikes, saveLike
} = require("./database/database")
// import texts from './texts'
// let {texts} = require('./texts')
// const {news} = require("./news");
let prefix = '/api'

let initAPI = async (app) => {

    app.get(prefix + '/likes', async (request, response) => {
        let likes = await getLikes()
        response.json({likes})
    })

    app.post(prefix + '/like', async (request, response) => {
        let message = request.body
        await saveLike(message)
        response.json({})
    })

    // VERSION

    app.get(prefix + '/version', async (request, response) => {
        response.json(process.env.HEROKU_RELEASE_VERSION)
    })

    let routes = [];
    app._router.stack.forEach(function (r) {
        if (r.route && r.route.path) {
            routes.push(r.route.path)
        }
    });

    app.get(prefix, function (request, response) {
        response.json(routes);
    });
}

module.exports = {
    initAPI
}