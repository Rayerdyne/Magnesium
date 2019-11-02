const {Collection} = require('discord.js');

exports.run = (bot, msg, args) => {
    if (! args[0]){
        msg.channel.send("Ajoute un mot à chercher gros PD !").then(message => message.delete(bot.DELAY));
        return;
        }

    bot.counters.set(args[0], new Collection());

    msg.channel.send(`Le compteur de "${args[0]}" a été ajouté !`);
};

exports.help = {
  name: "c_add",
  description: "Ajoute un compteur de mot : on va compter le nombre de fois que l'on dit arg[0]"
};
