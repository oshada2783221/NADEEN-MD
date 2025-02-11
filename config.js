const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SAQxlRga#CEQRYf19OhOZB82iuYCPBS5HLK1dhLM30GicSBaWcNA", //put your session id
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
MODE: process.env.MODE || "private", //private | public | groups | inbox
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false", //true or false 
AUTO_TYPING: process.env.AUTO_TYPING || "false", //true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //true or false
AUTO_VOICE: process.env.AUTO_VOICE || "true" //true or false

};
