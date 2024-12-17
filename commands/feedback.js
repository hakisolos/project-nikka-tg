const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'feedback', // This is the name of the command (/feedback)
  execute: async (ctx) => {
    const feedback = ctx.message.text.split(' ').slice(1).join(' '); // Get feedback text from the user
    
    if (!feedback) {
      return ctx.reply('Please provide your feedback. Example: /feedback Great bot!');
    }

    // Save feedback to a file
    const feedbackFile = path.join(__dirname, 'feedback.txt');
    fs.appendFile(feedbackFile, `${new Date().toISOString()} - ${feedback}\n`, (err) => {
      if (err) {
        return ctx.reply('Sorry, there was an error saving your feedback.');
      }
      ctx.reply('Thank you for your feedback! It has been saved.');
    });
  },
};
