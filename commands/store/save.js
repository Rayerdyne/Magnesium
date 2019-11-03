const fs = require('fs');

exports.run = (bot, msg, args) =>{
      let toWrite = {};

      bot.store.forEach((valueDir, keyDir, mapDir) =>{
          toWrite[keyDir] = {};
          valueDir.forEach((valueElm, keyElm, mapElm) => {
              toWrite[keyDir][keyElm] = valueElm;
            });
      });

      toWrite.djrole = bot.player.djrole;

      let data = JSON.stringify(toWrite);
      fs.writeFileSync('./commands/store/urls.json', data);

      console.log ("Registered");

      msg.channel.send("Saved !");

};

exports.help = {
  name: "save",
  description: "Write the complete url bank in the json file."
};
