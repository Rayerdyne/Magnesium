exports.run = (bot, msg, args) => {
    if (! args[0]){
        msg.channel.send("Ajoute un mot à retirer gros PD !").then(message => message.delete(bot.DELAY));
        return;
        }

    if (! bot.counters.has(args[0])){
        msg.channel.send(`Le compteur de "${args[0]}" n'existe pas !`).then(message => message.delete(bot.DELAY));
        return;
      }

    bot.counters.delete(args[0]);

    msg.channel.send(`Le compteur de "${args[0]}" a été retiré !`);
};

exports.help = {
  name: "c_remove",
  description: "Retire un compteur de mot"
};
