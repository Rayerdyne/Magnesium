const {Collection} = require('discord.js');

exports.run = (bot, msg, args) =>{
      let data = require('./../store/urls.json');
      bot.store.deleteAll();

      for (var i in data){
            if (i === "djrole")
                  continue;
            bot.store.set(i, new Collection());
            for (var j in data[i]){
                  bot.store.get(i).set(j, data[i][j])
            }
      }

      bot.player.djrole = data.djrole;

      if (! msg)    return;
      msg.channel.send("Reloaded !");
};

exports.help = {
  name: "reload",
  description: "Reloads the json file and updates the url bank.\n \
  :warning: Unsaved changes will be lost."
};
