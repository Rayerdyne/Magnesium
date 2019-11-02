exports.run = (bot, msg, args) =>{
      if (! args[0])
          {
            msg.channel.send("Stp précise un stupréfix flip !").then(message => message.delete(bot.DELAY));
            return;
          }
      bot.PREFIX = args[0];
      msg.channel.send(`Le préfixe a été modifié en ${bot.PREFIX}`);

};

exports.help = {
  name: "setprefix",
  description: "Modifie le préfixe du bot"
};
