module.exports = (bot, msg) =>{
  //pour les compteurs :
  const usernamee = msg.author.username;
  var pos = 0;
  var numberr = 0;

  bot.counters.forEach((value, key, map) => {
      while (msg.content.indexOf(key, pos) !== -1 && pos < msg.content.length)
          {
          pos = msg.content.indexOf(key, pos) + 1;
          numberr++;
          }
      if (numberr === 0)          return;

      if (! value.has(usernamee))
          value.set(usernamee, numberr);
      else
          value.set(usernamee, value.get(usernamee) + numberr);
      });

      //commande prefix mour les administrateurs
  if (msg.member.hasPermission("ADMINISTRATOR") && msg.content.startsWith("prefix"))
      {  msg.channel.send(bot.PREFIX);}

  //Si ça commence pas par le préfixe..., si c'est un bot...
  if (msg.content.indexOf(bot.PREFIX) !== 0)   return;
  // if (msg.author.bot)                          return;

  const lines = msg.content.slice(bot.PREFIX.length).split(bot.CMDSEPARATOR);
  var i;

  for (i = 0; i < lines.length; i++) {
      //Capture des arguments
      const args = lines[i].trim().split(/ +/g);//split en enlevant les espaces blanc
      let cmd = args.shift().toLowerCase();

      //gestion des commandes "par zone":
      if (cmd.length === 1){
            cmd = cmd + '_' + args.shift().toLowerCase();
          }


      commande = bot.commands.get(cmd);
      if (!commande){
            //gestion des aliases
            if (bot.aliases.has(cmd)){
                  cmd = bot.aliases.get(cmd);
                  commande = bot.commands.get(cmd);
                }
            if (! commande)    return undefined;
          }

      commande.run(bot, msg, args);
      }
};
