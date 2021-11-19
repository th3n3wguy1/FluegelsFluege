const express = require('express')
const app = express()

global.database = require('./api/mongo')
global.config = require('./config')

app.use(express.json());

app.use('/api', require('./api/auth').router)
app.use("/api/user", require('./api/routes/user'))
app.use("/api/flights", require('./api/routes/flights'))

app.listen(config.port, () => {
    console.log(`REST-API listening on port ${config.port}`)
})