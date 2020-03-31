Discord = require("discord.js");

exports.run = (bot, msg, args) => {
    const server = bot.servers[msg.guild.id];
    const prefix = args[0];

    const embed = new Discord.RichEmbed()
        .setColor("#10439c")
        .setTitle("**Matches:**");
        
    server.store.forEach((valueDir, keyDir, mapDir) =>{

        valueDir.forEach((valueElm, keyElm, mapElm) => {
            if (keyElm.includes(prefix)) {
                embed.addField(`${keyElm}`, `in ***${keyDir}**`, false);
            }
          });
    });

    if (embed.fields.length === 0) {
        msg.channel.send("😐 No matches found.");
    }
    else {
        msg.channel.send(embed);
    }

};

exports.help = {
  name: "find",
  description: "Find all keys in directory that contains with the specified prefix."
};
