module.exports = (messageReaction, user, bot) => {
  if (! bot.servers[msg.guild.id]){
    bot.servers[msg.guild.id] = require("./../../newServer")();
  }
  const server = bot.servers[msg.guild.id];

    if (messageReaction.emoji.name !== '👍') return;
    if (!server.player.djrole) return;

    const member = messageReaction.message.guild.member(user);

    if (! member.roles.find(role => role.name ===  server.player.djrole)) return;
    
    /*We just make as if the reacted message was re-sent, then we require the command with root = true*/
    if (messageReaction.message.content.indexOf(server.prefix) !== 0)   return;

    const content = messageReaction.message.content.slice(server.prefix.length)
    const args = content.trim().split(/ +/g);//removes blanks and split
    const cmd = args.shift().toLowerCase();

      //"zone" commands
    if (cmd.length === 1){
          cmd = cmd + '_' + args.shift().toLowerCase();
        }

    var command = bot.commands.get(cmd);
    if (!command){
          //aliases
          if (bot.aliases.has(cmd)){
                cmd = bot.aliases.get(cmd);
                command = bot.commands.get(cmd);
              }
          if (! command)    return undefined;
        }

    var i;
    for (i = 0; i < server.player.toValidate.length; i++){
      if (server.player.toValidate[i].content === messageReaction.message.content){
        server.player.toValidate.splice(i, 1);
        break;
      }
    }
    if (i === server.player.toValidate.length) return;
    //in this case, the reacted message is not from a non DJ people

    command.run(bot, messageReaction.message, args, true);
    return;
}