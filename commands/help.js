module.exports = {
  name: 'help', // Command name
  execute: (ctx) => {
    ctx.reply('Available Commands:\n/start - Welcome Message\n/help - List Commands\n/info - User Info');
  },
};
