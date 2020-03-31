exports.run = (bot, msg, args, fromPlay, silent) =>{
    const server = bot.servers[msg.guild.id];
  //Vérifications
      if (! args[0]){
            msg.channel.send("🙊 Not enough arguments provided !");
            return;
      }

      var folderName = server.curDir;
      var folder = server.store.get(folderName);
      if (args[1] === "in"){
        if (!args[2]){
          msg.channel.send("🙊 You need to provide a directory name after `in`.");
          return;
        } else if(!server.store.has(args[2])){
          msg.channel.send(`😧 **${args[2]}** directory does not exists .`);
          return;
        }
        folderName = args[2];
        folder = server.store.get(folderName);
      }

      if (!folder.has(args[0])){
        if (!silent) {
            msg.channel.send(`\`${args[0]}\` does not exists in **${folderName}** 😫.`);
        }
        return;
      }

      if (fromPlay){
        return folder.get(args[0]);
      }
      else {
        if (!silent){
            msg.channel.send(`\`${folder.get(args[0])}\``);
        }
        return;
      }
};

exports.help = {
  name: "get",
  description: "Sends what's stored under a providen key :\n \
`get key` sends what has been stored in `key` in the current directory\n \
`get key in myDir` sends what has been stored in `key` in **myDir**."
};
