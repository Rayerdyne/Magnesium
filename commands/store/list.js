exports.run = (bot, msg, args) =>{
  var ans="";

    switch(args[0])
    {
        case undefined:
          ans = "*Current directory :*\n";
          var folder = bot.store.get(bot.curDir);
          folder.forEach((value, key, map) => {
            ans = ans + `> \`${key}\`\n`;
          });
          msg.channel.send(ans);
          break;
        case "dirs":
          ans = "*Directories : *\n";
          bot.store.forEach((value, key, map) => {
            ans = ans + `> \`${key}\`\n`;
          });
          msg.channel.send(ans);
          break;
        case "everything":
          bot.store.forEach((valueDir, keyDir, mapDir) =>{
              ans = ans + `**${keyDir}**\n`
              valueDir.forEach((valueElm, keyElm, mapElm) => {
                  ans = ans + `> \`${keyElm}\`\n`;
                });
          });
          msg.channel.send(ans);
          break;
        default:
          if (!bot.store.has(args[0])){
            msg.channel.send(`**${args[0]}** folder does not exists.`);
            return;
          }
          folder = bot.store.get(args[0]);
          ans = ans + `**${args[0]}**\n`;
          folder.forEach((value, key, map) => {
            ans = ans + `> \`${key}\`\n`;
          });
          msg.channel.send(ans);
          break;
    }
};


exports.help = {
  name: "list",
  description: "Lists the registered elements : \n \
`list` lists the current directory\n \
`list dirs` lists all directories\n \
`list myDir` lists the content of directory **myDir**\n \
`list everything` lists all directories and thier content."
};
