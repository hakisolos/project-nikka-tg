/*const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

// Replace with your actual bot token
const BOT_TOKEN = '7978081477:AAEAdpP_-Pl-eOTgBQmCtC9vywu9oab7UVg';

// Initialize the bot
const bot = new Telegraf(BOT_TOKEN);

// Dynamically load all command files from the "commands" folder
const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const command = require(path.join(commandsDir, file));
    bot.command(command.name, command.execute);
  }
});

// Handle errors
bot.catch((err, ctx) => {
  console.error(`Error: ${err}`);
  ctx.reply('An error occurred!');
});

// Launch the bot
bot.launch();
console.log('🤖 Bot is running...');
*
const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

// Replace with your bot's token
const BOT_TOKEN = '7978081477:AAEAdpP_-Pl-eOTgBQmCtC9vywu9oab7UVg';

// Initialize the bot
const bot = new Telegraf(BOT_TOKEN);

// Dynamically load all command files from the "commands" folder
const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const command = require(path.join(commandsDir, file));
    
    // Log the loaded command for debugging
    console.log(`Loaded command: ${command.name}`);
    
    // Register the command
    bot.command(command.name, command.execute);
  }
});

// Handle errors
bot.catch((err, ctx) => {
  console.error(`Error: ${err}`);
  ctx.reply('An error occurred!');
});

// Launch the bot
bot.launch();
console.log('🤖 Bot is running...');
*/
const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

// Replace with your bot's token
const BOT_TOKEN = '7978081477:AAEAdpP_-Pl-eOTgBQmCtC9vywu9oab7UVg';

// Initialize the bot
const bot = new Telegraf(BOT_TOKEN);

// Dynamically load commands from the commands directory
const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const command = require(path.join(commandsDir, file));
    bot.command(command.name, command.execute);
  }
});

// Handle 'info' button click
bot.action('info', (ctx) => {
  ctx.reply('This is the info section!');
});

// Handle 'help' button click
bot.action('help', (ctx) => {
  ctx.reply('Here is the help section!');
});

// Launch the bot
bot.launch();
console.log('🤖 Bot is running...');
