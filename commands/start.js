module.exports = {
  name: 'start', // Command name
  execute: (ctx) => {
    ctx.reply(`Welcome ${ctx.from.first_name}! 🚀\nSend /help to see all commands.`);
  },
};
