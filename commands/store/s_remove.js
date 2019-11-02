exports.run = (bot, msg, args) =>{

    //Vérifications
        if (! args[0]){
              msg.channel.send("There is no arguments !");
              return;
        }

        for (i = 0; i < args.length; i++)
            {
              if (! bot.store.has(args[i])){
                  msg.channel.send(`${args[i]} does not exists !`);
                  return;
                  }

              bot.store.delete(args[i]);
              msg.channel.send(`${args[i]} deleted !`);

            }

};

exports.help = {
  name: "s_remove",
  description: "Removes an element.\nAlias : `s_rm`"
};
