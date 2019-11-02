exports.run = (bot, msg, args) =>{
      if (! args[0])
          {
            msg.channel.send("No argument provided.").then(message => message.delete(bot.DELAY));
            return;
          }
      bot.PREFIX = args[0];
      msg.channel.send(`Prefix set to : \`${bot.PREFIX}\``);

};

exports.help = {
  name: "setprefix",
  description: "Sets bot's prefix."
};
