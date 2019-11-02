const {RichEmbed} = require('discord.js')

exports.run = (bot, msg, args) =>{
    //Vérifications...
      if (! args[0]){
            msg.channel.send("Pas d'arguments !").then(message => message.delete(bot.DELAY));
            return;
        }

    const embed = new RichEmbed()
                    .setTitle("Toutes les entrées enregistrées :");

    var c = 0;
    bot.urls.forEach((value, key, map) => {
        if (key.indexOf(args[0]) !== -1){
            embed.addField(key, value, true);
            c++;
            }
      });

    if (c === 0){
        msg.channel.send("Pas re résutlats. Désolé.");
      }
    else{
        msg.channel.send(embed);
    }

};

exports.help = {
  name: "search",
  description: "Recherche un mot-clé dans toutes les clés de la banque d'urls"
};
