const { Markup } = require('telegraf'); // Import Markup to create buttons

module.exports = {
  name: 'start', // This is the name of the command (/start)
  execute: (ctx) => {
    const imageUrl = 'https://files.catbox.moe/flinnf.jpg'; // Replace with the image URL
    const caption = 'Welcome to the bot!';

    // Create inline keyboard with buttons
    const buttons = Markup.inlineKeyboard([
      [Markup.button.callback('Info', 'info')],  // Button for 'info'
      [Markup.button.callback('Help', 'help')]   // Button for 'help'
    ]);

    // Send the image with caption and the buttons
    ctx.replyWithPhoto(imageUrl, { caption: caption, reply_markup: buttons });
  },
};
