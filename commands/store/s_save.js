const fs = require('fs');

exports.run = (bot, msg, args) =>{
      let toWrite = {};

      bot.urls.forEach((value, key, map) =>{
          toWrite[key] = value;
      });

      let data = JSON.stringify(toWrite);
      fs.writeFileSync('./commands/store/urls.json', data);

      console.log ("Registered");

      msg.channel.send("Saved !");

};

exports.help = {
  name: "s_save",
  description: "Write the complete url bank in the json file."
};
