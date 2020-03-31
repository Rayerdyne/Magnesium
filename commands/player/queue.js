const Discord  = require("discord.js");

exports.run = (bot, msg, args) =>{

    const server = bot.servers[msg.guild.id];
    if (! server.player.isPlaying){
      msg.channel.send("The bot is not currently playing music 😆!");
      return;
    }

    const embed = new Discord.RichEmbed()
        .setColor("#10439c")
        .setTitle("**Queue :**")
        .setFooter(`Loop : ${(server.player.isLooping) ? "ON" : "OFF"}`)
        .addField("`Current`  :" + server.player.current.title, `*Requested by ${server.player.current.requester}*`, true);

    var i;
    for (i = 0; i < server.player.queue.length && i < 10; i++)
        {
          embed.addField(`\`${i+1}\`  : __${server.player.queue[i].title}__`, 
          `*Requested by ${server.player.queue[i].requester}*`, true);
        }

    msg.channel.send(embed);
};  

exports.help = {
  name: "queue",
  description: "Sends at most the 10 firsts elements of the queue."
};
