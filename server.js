let express = require('express')
let path = require('path')
const {initAPI} = require("./server/api");
const google = require("./server/google");
let app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

let server = require('http').Server(app)
const port = process.env.PORT || 5000
server.listen(port)

require('dotenv').config()

initAPI(app).then(r => {})

// google.readGoogleTable().then(r => {})

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('/dyno', function (request, response) {
    let heroku = {
        date: process.env.HEROKU_RELEASE_CREATED_AT,
        version: process.env.HEROKU_RELEASE_VERSION,
        commit: process.env.HEROKU_SLUG_COMMIT
    }
    response.json(heroku.date ? heroku : {localhost: true})
})