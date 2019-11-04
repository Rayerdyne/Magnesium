const fs = require('fs');

exports.run = (bot, msg, args, silent) =>{
      var toWrite = {};
      var server;

      for (var guildId in bot.servers)
          {
          toWrite[guildId] = {};
          bot.servers[guildId].store.forEach((valueDir, keyDir, mapDir) =>{
              toWrite[guildId][keyDir] = {};
              valueDir.forEach((valueElm, keyElm, mapElm) => {
                  toWrite[guildId][keyDir][keyElm] = valueElm;
                });
            });
          toWrite[guildId].djrole = bot.servers[guildId].player.djrole;
          toWrite[guildId].prefix = bot.servers[guildId].prefix;
          }

      let data = JSON.stringify(toWrite, null, 4);
      fs.writeFileSync('./commands/store/urls.json', data);

      if (silent){
          console.log("Silently registered.");
          return;
      }

      console.log ("Registered");
      msg.channel.send("Saved !");

};

exports.help = {
  name: "save",
  description: "Write the complete url bank in the json file."
};
