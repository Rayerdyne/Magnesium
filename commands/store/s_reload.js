exports.run = (bot, msg, args) =>{
      let variablee = require('./../../urls.json');
      bot.urls.deleteAll();

      for (var i in variablee){
            bot.urls.set(i, variablee[i]);
      }


      if (! msg)    return;
      msg.channel.send("Reloaded !");
};

exports.help = {
  name: "s_reload",
  description: "Reloads the json file and updates the url bank.\n \
  :warning: Unsaved changes will be lost."
};
