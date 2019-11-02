exports.run = (bot, msg, args) =>{
  //Vérifications
      if (! args[0]){
            msg.channel.send("Pas d'arguments !").then(message => message.delete(bot.DELAY));
            return;
      }

      var i;
      for (i = 0; i < args.length; i++)
          {
            if (! bot.urls.has(args[i])){
                msg.channel.send(`${args[i]} n'existe pas !`);
                return;
                }

            msg.channel.send(bot.urls.get(args[i]));

          }

};

exports.help = {
  name: "get",
  description: "Retrouve une url à partir de son nom"
};
