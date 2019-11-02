module.exports = (bot, msg) =>{

      //prefix command for admins
  if (msg.member.hasPermission("ADMINISTRATOR") && msg.content.startsWith("prefix"))
      {  msg.channel.send(bot.PREFIX);}

  if (msg.content.indexOf(bot.PREFIX) !== 0)   return;
  // if (msg.author.bot)                          return;

  const lines = msg.content.slice(bot.PREFIX.length).split(bot.CMDSEPARATOR);
  var i;

  for (i = 0; i < lines.length; i++) {

      const args = lines[i].trim().split(/ +/g);//removes blanks and split
      let cmd = args.shift().toLowerCase();

        //"zone" commands
      if (cmd.length === 1){
            cmd = cmd + '_' + args.shift().toLowerCase();
          }


      command = bot.commands.get(cmd);
      if (!command){
            //aliases
            if (bot.aliases.has(cmd)){
                  cmd = bot.aliases.get(cmd);
                  command = bot.commands.get(cmd);
                }
            if (! command)    return undefined;
          }

      command.run(bot, msg, args);
      }
};
