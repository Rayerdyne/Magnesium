const { RichEmbed } = require('discord.js');

exports.run = (bot, msg, args) =>{
      if (! args[0]){
          msg.channel.send("Ajoute le mot à voir, gros PD !").then(message => message.delete(bot.DELAY));
          return;
          }

    if (args[0] === "*")
        {
          embed = new RichEmbed().setDescription("Tout les mots comptés :");
          var i = 0;
          bot.counters.forEach((value, key, map) => {
                  i++;
                  embed.addField(i, key, true);
                });

          msg.channel.send(embed);
          return;
        }


//test si le mot est compté
    if (! bot.counters.has(args[0])){
        msg.channel.send(`Le compteur de ${args[0]} n'existe pas !`).then(message => message.delete(bot.DELAY));
        return;
        }

    embed = new RichEmbed()
                        .setDescription(`Comptage des "${args[0]}" :`);
    if (! args[1])
        {
          bot.counters.get(args[0]).forEach((value, key, map) => {
              embed.addField(key, value, true);
              });
        }
    else
        {
          var i;
          msg.mentions.users.forEach((value,  key, map) => {
                //who = value
                if (! bot.counters.get(args[0]).has(value.username))
                    {embed.addField(value.username, "0", true);}
                else
                    {embed.addField(value.username, bot.counters.get(args[0]).get(value.username), true);}
              });

        }

    msg.channel.send(embed);

};

exports.help = {
  name: "c_get",
  description: "Répond les nombres de fois qu'on a dit le mot spécifié en argument. Le second (facultatif) mentionne le pseudo"
};
