exports.run = (bot, msg, args) =>{
  const server = bot.servers[msg.guild.id];
    //Vérifications
    if (! args[0]){
          msg.channel.send("🙊 No arguments provided !");
          return;
    }

    //remove a directory
    if (args[0] === "dir"){
      if (! args[1]){
        msg.channel.send("😅 You need to provide a directory after `dir`.");
        return;
      }  else if(!server.store.has(args[1])){
        msg.channel.send(`😅 Directory **${args[2]}** does not exists.`);
        return;
      }  else if (args[1] === server.curDir){
        msg.channel.send("😅 You cannot remove the current directory !");
        return;
      } else if (args[1] === "global"){
        msg.channel.send("😅 You cannot remove the global directory !");
        return;
      }
      server.store.get(args[1]).deleteAll();
      server.store.delete(args[1]);
      msg.channel.send(`📂 Directory **${args[1]}** deleted !`);
      return;
    }

    // remove an Element
    var folderName = server.curDir;
    var folder = server.store.get(folderName);
    if (args[1] === "in"){
          if (! args[2]){
            msg.channel.send("🙊 You need to provide a directory after `in`.");
            return;
          }  else if(!server.store.has(args[2])){
            msg.channel.send(`😅 Directory **${args[2]}** does not exists.`);
            return;
          }
          folderName = args[2];
          folder = server.store.get(folderName);
        }

    if (!folder.has(args[0])){
      msg.channel.send(`😅 \`${args[0]}\` does not exists in **${folderName}**.`);
      return;
    }

    folder.delete(args[0]);
    msg.channel.send(`🤗 \`${args[0]}\` removed from **${folderName}**.`);

};

exports.help = {
  name: "rm",
  description: "Removes an element.\n \
`remove elm` will remove `elm` in the current directory\n \
`remove elm in myDir` will remove `elm` in the directory **myDir**\n \
`remove dir myDir` will remove directory **myDir** and its content\n \
  Alias : `rm`"
};
