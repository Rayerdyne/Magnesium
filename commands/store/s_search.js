const {RichEmbed} = require('discord.js')

exports.run = (bot, msg, args) =>{
    //Vérifications...
      if (! args[0]){
            msg.channel.send("Not enough arguments !");
            return;
        }

    const embed = new RichEmbed()
                    .setTitle("Matches :");

    var c = 0;
    bot.urls.forEach((value, key, map) => {
        if (key.indexOf(args[0]) !== -1){
            embed.addField(key, value, true);
            c++;
            }
      });

    if (c === 0){
        msg.channel.send("No result found.");
      }
    else{
        msg.channel.send(embed);
    }

};

exports.help = {
  name: "s_search",
  description: "Search a key-word in the url bank."
};
