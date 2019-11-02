const fs = require('fs');

exports.run = (bot, msg, args) =>{
      let toWrite = {};

      bot.urls.forEach((value, key, map) =>{
          toWrite[key] = value;
      });

      let donnees = JSON.stringify(toWrite);
      fs.writeFileSync('./commands/store/urls.json', donnees);

      console.log (toWrite);
      console.log ("Registered");

      msg.channel.send("Enregistré !").then(mmm => mmm.delete(bot.DELAY));

};

exports.help = {
  name: "save",
  description: "Effectue l'écriture dans le fichier json"
};
