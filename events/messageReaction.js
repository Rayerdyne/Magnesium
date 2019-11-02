module.exports = (messageReaction, user, bot) => {

    if (messageReaction.emoji.name !== '👍') return;
    if (!bot.player.djrole) return;

    const member = messageReaction.message.guild.member(user);

    if (! member.roles.find(role => role.name ===  bot.player.djrole)) return;
    
    /*We just make as if the reacted message was re-sent, then we require the command with root = true*/
    if (messageReaction.message.content.indexOf(bot.PREFIX) !== 0)   return;

    const content = messageReaction.message.content.slice(bot.PREFIX.length)
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

    command.run(bot, messageReaction.message, args, true);
    return;
}