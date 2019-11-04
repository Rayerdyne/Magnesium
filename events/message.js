module.exports = (bot, msg) =>{

  if (! bot.servers[msg.guild.id]){
    bot.servers[msg.guild.id] = require("./../newServer")();
  }
  const server = bot.servers[msg.guild.id];
//prefix command for admins
  if (msg.member.hasPermission("ADMINISTRATOR") && msg.content.startsWith("prefix"))
      { 
        if (!server.prefix){
          msg.channel.send(":warning: **ERROR** No prefix set !\nAutomatically set to `--`.");
          server.prefix = "--";
          return;
        } 
        msg.channel.send(server.prefix);
      }

  if (msg.content.indexOf(server.prefix) !== 0)   return;
  // if (msg.author.bot)                          return;

  const lines = msg.content.slice(server.prefix.length).split(bot.cmdseparator);
  var i;

  for (i = 0; i < lines.length; i++) {

      const args = lines[i].trim().split(/ +/g);//removes blanks and split
      let cmd = args.shift().toLowerCase();

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
