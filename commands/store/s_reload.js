exports.run = (bot, msg, args) =>{
      let variablee = require('./../store/urls.json');
      bot.store.deleteAll();

      for (var i in variablee){
            bot.store.set(i, variablee[i]);
      }


      if (! msg)    return;
      msg.channel.send("Reloaded !");
};

exports.help = {
  name: "s_reload",
  description: "Reloads the json file and updates the url bank.\n \
  :warning: Unsaved changes will be lost."
};
