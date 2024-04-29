const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
const DB_URL =  process.env.DATABASE_URL || '';
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'ENTER UR ID', //your ssid to run bot
    HEROKU: {
    API_KEY: process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME },
    BGM_URL : process.env.BGM_URL || "null",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'false'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'false'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : process.env.STATUS_VIEW || "false",
    SAVE_STATUS : toBool(process.env.SAVE_STATUS || "false"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "false"),
    DISABLE_PM: toBool(process.env.DISABLE_PM || "false"),
    DISABLE_GRP : toBool(process.env.DISABLE_GRP || "false"),
    ERROR_MSG : toBool(process.env.ERROR_MSG || "true"),
    GPJOIN: toBool(process.env.GPJOIN || 'false'),
    AUTO_READ : process.env.AUTO_READ ||  "false",//true, command
    CHATBOT : process.env.CHATBOT || "false",//true, pm, group
    AUTO_REACT : process.env.AUTO_REACT || "true",//true, command, emoji
    WARNCOUND : process.env.WARNCOUND || 5,
    BOT_INFO : process.env.BOT_INFO || "Gᴏᴅ-Zᴇɴɪᴛꜱᴜ;Qᴜᴇᴇɴ-Nᴇᴢᴜᴋᴏ;https://graph.org/file/3879cf1910f65bd8457d7.jpg",
    MODE : process.env.MODE || "private",
    PREFIX : process.env.PREFIX || "[.,!]",//both  .  and [.] equal, for multi prefix we use [] this
    LANG : process.env.LANG || "en",
    PM_MESSAGE: process.env.PM_MESSAGE || "null",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "unavailable",
    AUDIO_DATA : process.env.AUDIO_DATA || "NEZUKO;ZENITSU;https://i.imgur.com/jNy5AIn.jpeg",
    STICKER_DATA : process.env.STICKER_DATA || "ɴᴇᴢᴜᴋᴏ-ᴍᴅ;ᴢᴇɴɪᴛꜱᴜ",
    SUDO : process.env.SUDO || "917907387121",
    RMBG_KEY: process.env.RMBG_KEY,
    OPEN_AI: process.env.OPEN_AI,
    ELEVENLABS: process.env.ELEVENLABS,
    OCR_KEY: (process.env.OCR_KEY || 'K84003107488957').trim(),
    DATABASE: DB_URL ? new Sequelize(DB_URL,{dialect:'postgres',ssl:true,protocol: 'postgres', dialectOptions: {native: true,ssl:{require: true,rejectUnauthorized: false}}, logging: false}) : new Sequelize({dialect:'sqlite',storage:'./database.db',logging:false}) 
};
