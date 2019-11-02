const { RichEmbed } = require('discord.js');


exports.run = (bot, msg, args) =>{

    embed = new RichEmbed().setDescription("Tout les mots comptés :");
    var i = 0;
    bot.counters.forEach((value, key, map) => {
            i++;
            if (i === 25){
                  embed.addField("Et aussi ...", "D'autres que je n'ai pas la place pour afficher." , true);
                  return;
                }

            embed.addField(i, key, true);
          });

    msg.channel.send(embed);
};

exports.help = {
  name: "c_list",
  description: "Liste tout les mots comptés. (=c_get *)"
};
