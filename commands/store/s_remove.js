exports.run = (bot, msg, args) =>{

    //Vérifications
        if (! args[0]){
              msg.channel.send("Pas d'arguments !").then(message => message.delete(bot.DELAY));
              return;
        }

        for (i = 0; i < args.length; i++)
            {
              if (! bot.urls.has(args[i])){
                  msg.channel.send(`${args[i]} n'existe pas !`);
                  return;
                  }

              bot.urls.delete(args[i]);
              msg.channel.send(`${args[i]} supprimé !`).then(m => m.delete(bot.DELAY));

            }

};

exports.help = {
  name: "s_remove",
  description: "Removes an element.\nAlias : `s_rm`"
};
