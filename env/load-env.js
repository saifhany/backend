const path = require('path')
require('dotenv').config({path:path.join(__dirname,'.env')})

envVar = {
    PORT:process.env.PORT
}

module.exports = envVar