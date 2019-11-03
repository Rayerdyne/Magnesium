module.exports = (bot) => {
      console.log("The bot is started !");

      bot.commands.get("reload").run(bot);
};
