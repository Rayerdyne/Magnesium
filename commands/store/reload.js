const {Collection} = require('discord.js');

exports.run = (bot, msg, args) =>{
      var server;
      let data = require('./../store/urls.json');

      for (var guildId in data){
            if (!bot.servers[guildId]){
                  bot.servers[guildId] = require("./../../newServer")();
            }
            server = bot.servers[guildId];
            server.store.deleteAll();
            for (var i in data[guildId]){
                  if (i === "djrole")     continue;

                  server.store.set(i, new Collection());
                  for (var j in data[guildId][i]){
                        server.store.get(i).set(j, data[guildId][i][j]);
                  }
            }
            if (! server.store.has("global")){
                  server.store.set("global", new Collection());
            }
            server.player.djrole = data[guildId].djrole;
            server.prefix = data[guildId].prefix;
      }

      if (! msg)    return;
      msg.channel.send("Reloaded !");
};

exports.help = {
  name: "reload",
  description: "Reloads the json file and updates the url bank.\n \
  :warning: Unsaved changes will be lost."
};
