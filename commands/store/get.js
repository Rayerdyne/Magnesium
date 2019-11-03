exports.run = (bot, msg, args, fromPlay) =>{
  //Vérifications
      if (! args[0]){
            msg.channel.send("Not enough arguments !");
            return;
      }

      var folderName = bot.curDir;
      var folder = bot.store.get(folderName);
      if (args[1] === "in"){
        if (!args[2]){
          msg.channel.send("You need to provide a directory name after `in`.");
          return;
        } else if(!bot.store.has(args[2])){
          msg.channel.send(`**${args[2]}** directory does not exists.`);
          return;
        }
        folderName = args[2];
        folder = bot.store.get(folderName);
      }

      if (!folder.has(args[0])){
        msg.channel.send(`\`${args[0]}\` does not exists in **${folderName}**.`);
        return;
      }

      if (fromPlay){
        return folder.get(args[0]);
      }
      else {
        msg.channel.send(`\`${folder.get(args[0])}\``);
        return;
      }
};

exports.help = {
  name: "get",
  description: "Sends what's stored under a providen key :\n \
`get key` sends what has been stored in `key` in the current directory\n \
`get key in myDir` sends what has been stored in `key` in **myDir**."
};
