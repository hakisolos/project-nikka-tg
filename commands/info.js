module.exports = {
  name: 'info', // Command name
  execute: (ctx) => {
    const { first_name, last_name, username, id } = ctx.from;
    ctx.reply(
      `Your Info:\nName: ${first_name} ${last_name || ''}\nUsername: @${username || 'N/A'}\nID: ${id}`
    );
  },
};
