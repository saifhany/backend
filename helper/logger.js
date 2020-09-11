const fs = require('fs');
const path = require('path')
const logtype = require('./../enums/log-type.enum');
const fileDIR = path.join(__dirname, '../logs/logfile.log')

const log = (loggedData)=>{
    if(fs.existsSync(fileDIR))
    {
        fs.appendFileSync(fileDIR ,loggedData)
    } else {
        fs.writeFileSync(fileDIR , loggedData)
    }
}


module.exports = log;