const MusicBot = require("discord-music-system"); // Require the module
const config = require('./example-config.json'); // Require the config.json

const bot = new MusicBot({
    token: `${config.token}`, 
    ytApiKey: `${config.ytApiKey}`, 
    prefix: `${config.prefix}` 
});

bot.run(); // Run the bot
