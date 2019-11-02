exports.run = (bot, msg, args) =>{
  //Vérifications
      if (! args[0]){
            msg.channel.send("Not enough arguments !");
            return;
      }

      var i;
      for (i = 0; i < args.length; i++)
          {
            if (! bot.urls.has(args[i])){
                msg.channel.send(`\`${args[i]}\` does not exists !`);
                return;
                }

            msg.channel.send('__' + bot.urls.get(args[i]) + '__');

          }

};

exports.help = {
  name: "s_get",
  description: "Sends what's stored under a providen key :\n \
  `get key`  will send what has been stored in `key`."
};
