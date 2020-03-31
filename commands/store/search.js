const {RichEmbed} = require('discord.js')

exports.run = (bot, msg, args) =>{
    const server = bot.servers[msg.guild.id];
    //Vérifications...
      if (! args[0]){
            msg.channel.send("Not enough arguments !");
            return;
        }

    var ans = "__Matches :__\n";

    var c = 0;
    server.store.forEach((valueDir, keyDir, mapDir) => {
          valueDir.forEach((valueElm, keyElm, mapElm) =>{
            if (keyElm.indexOf(args[0]) !== -1){
                ans = ans + ` \`${keyElm}\` in **${keyDir}**.\n`;
                c++;
                }
          });
      });

    if (c === 0){
        msg.channel.send("No result found.");
      }
    else{
        msg.channel.send(ans);
    }

};

exports.help = {
  name: "search",
  description: "Search a key-word in the url bank, in all directories.\n \
  Gne it overrides find."
};
