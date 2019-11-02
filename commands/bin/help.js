exports.run = (bot, msg, args) =>{

      if (! args[0]){
            let enthalt = "Commands :\n"
            bot.commands.forEach((value, key, map) =>{
                  enthalt = enthalt + "> `" + key + "`\n";
                });
            enthalt = enthalt + "You can skip underscores : for example, \"`{prefix}s tell`\" works.\n"
            enthalt = enthalt + "Type `{prefix}help {command}` to get the command's help."
            msg.channel.send(enthalt);
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
                }
            msg.channel.send(`Command ${cmd} doesn't exists !`);
            return;
          }

      msg.channel.send(bot.commands.get(cmd).help.description);


};

exports.help = {
  name: "help",
  description: "Sends the help related to a specified command, the command list if no argument is provided"
};
