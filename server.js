const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.sendStatus(200)
});
app.listen(process.env.PORT);

const Token = process.env.Token
const youtubeapi = process.env.Youtubeapi

const MusicBot = require("./discord-music-system"); // Require the module
 
const bot = new MusicBot({ // Create the bot
    token: Token, // You can find the token at https://discord.com/developers/applications/
    ytApiKey: youtubeapi, // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
    prefix: '~~', // Example: /
    game: 'goat simulator' // Example: /help
});



 
bot.run(); // Run the bot