exports.run = (bot, msg, args) =>{

      if (! args[0]){
            let ans = "Commands :\n"
            bot.commands.forEach((value, key, map) =>{
                  ans = ans + "> `" + key + "`\n";
                });
            ans = ans + "Type `help command` to get command's help."
            msg.channel.send(ans);
            return;
          }

      let cmd;
      if (args[0].length === 1 && args[1])
          {cmd = args[0] + '_' + args[1];}
      else
          {cmd = args[0];}

      if (! bot.commands.has(cmd)) {
            if (bot.aliases.has(cmd)){
                  msg.channel.send(`Alias for ${bot.aliases.get(cmd)}`);
                  return;
                }
            msg.channel.send(`Command ${cmd} doesn't exists !`);
            return;
          }

      msg.channel.send(bot.commands.get(cmd).help.description);


};

exports.help = {
  name: "help",
  description: "Sends the help related to a specified command, the command list if no argument is provided."
};
