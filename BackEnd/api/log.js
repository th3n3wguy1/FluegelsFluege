const fs = require('fs')

function log(category, message) {
    fs.appendFile(`logs/${category}.log`, `[${new Date()}] ${message}\n`, (err) => {
        if (err) console.error('Error writing logs: %s', err.message)
    })
}

module.exports = log