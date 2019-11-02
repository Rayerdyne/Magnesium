exports.run = (bot, msg, args) =>{
      let variablee = require('./../../urls.json');
      bot.urls.deleteAll();

      for (var i in variablee){
            // if (variablee.hasOwnProperty(i)){
                  bot.urls.set(i, variablee[i]);
            // }
      }

      console.log ("bot.urls : " + bot.urls);
      console.log (variablee);

      if (! msg)    return;
      msg.channel.send("Rechargé !").then(mess => mess.delete(bot.DELAY));
};

exports.help = {
  name: "reload",
  description: "Lis le fichier json et mets à jour."
};
