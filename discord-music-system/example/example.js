const MusicBot = require("discord-music-system"); // Require teh module

const bot = new MusicBot({ // Create the bot
    token: 'Some Discord Token', // You can find teh token at https://discord.com/developers/applications/
    ytApiKey: 'A random YouTube API Key', // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
    prefix: 'I think the prefix goes here' // Example: /
});

bot.run(); // Run the bot
