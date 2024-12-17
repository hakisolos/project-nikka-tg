module.exports = {
    name: 'ping', // This is the name of the command (/ping)
    execute: async (ctx) => {
      const start = Date.now(); // Record the start time
  
      // Send a message and then calculate how long it took for the bot to reply
      await ctx.reply('Pinging...').then(() => {
        const end = Date.now(); // Record the end time
        const latency = end - start; // Calculate the difference (latency)
        ctx.reply(`Pong! 🏓\nLatency: ${latency}ms`);
      });
    },
  };
  