const {Collection} = require('discord.js');

exports.run = (bot, msg, args) =>{

  const server = bot.servers[msg.guild.id];
    //Checks :
    if (!args[1]) {
        msg.channel.send("🙊 Not enough arguments provided !");
        return;
      }

    //Create new directory :
    if (args[0] === "dir"){
        if (server.store.has(args[1])){
          msg.channel.send(`📂 Directory **${args[1]}** already exists !`);
          return;
        }
        server.store.set(args[1], new Collection());
        msg.channel.send(`📂 Directory **${args[1]}** created !`);
        return;
      }

    //Create new element :
    var folder = server.store.get(server.curDir);
    var folderName = server.curDir;
    if (args[2] === "in"){
        if (!args[3]){
            msg.channel.send("🙊 You need to provide a folder after `in` !");
            return;
          }  else if (!server.store.has(args[3])){
            msg.channel.send(`📂 Directory **${args[3]}** does not exists !`);
            return;
          }
        folder = server.store.get(args[3]);
        folderName = args[3];
      }

    if (folder.has(args[0])){
          msg.channel.send(`🤨 \`${args[0]}\` already exists in **${folderName}**.`);
          return;
        }

    folder.set(args[0], args[1]);

    msg.channel.send(`📃 \`${args[0]}\` registered in **${folderName}** !`);
};

exports.help = {
  name: "register",
  description: "Registers an url. Use :\n \
`register key url` registers key in the current directory\n \
`register key url in myDir` registers key in the **myDir** directory\n \
`register dir myDir` creates the directory **myDir**\n \
:warning: Changes are not automatically saved ! You need to call `save`\n \
Alias : `reg`"
};
