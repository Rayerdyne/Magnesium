exports.run = (bot, msg, args) =>{
  const server = bot.servers[msg.guild.id];
  var ans="";

    switch(args[0])
    {
        case undefined:
          ans = `*Current directory :* **${server.curDir}**\n`;
          var folder = server.store.get(server.curDir);
          folder.forEach((value, key, map) => {
            ans = ans + `> \`${key}\`\n`;
          });
          msg.channel.send(ans);
          break;
        case "dirs":
          ans = `📂 *Directories :* \n`;
          server.store.forEach((value, key, map) => {
            ans = ans + `> \`${key}\`\n`;
          });
          msg.channel.send(ans);
          break;
        case "everything":
          server.store.forEach((valueDir, keyDir, mapDir) =>{
              ans = ans + `**${keyDir}**\n`
              valueDir.forEach((valueElm, keyElm, mapElm) => {
                  ans = ans + `> \`${keyElm}\`\n`;
                });
          });
          msg.channel.send(ans);
          break;
        default:
          if (!server.store.has(args[0])){
            msg.channel.send(`**${args[0]}** folder does not exists 😬.`);
            return;
          }
          folder = server.store.get(args[0]);
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
