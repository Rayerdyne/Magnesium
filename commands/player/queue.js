const Discord  = require("discord.js");

exports.run = (bot, msg, args) =>{
    if (! bot.player.current.title){
      msg.channel.send("The bot is not currently playing music !");
      return;
    }

    const embed = new Discord.RichEmbed()
        .setColor("#10439c")
        .setTitle("**Queue :**")
        .setFooter(`Loop : ${(bot.player.isLooping) ? "ON" : "OFF"}`)
        .addField("`Current`  :" + bot.player.current.title, `*Requested by ${bot.player.current.requester}*`, true);

    var i;
    for (i = 0; i < bot.player.queue.length && i < 10; i++)
        {
          embed.addField(`\`${i+1}\`  : __${bot.player.queue[i].title}__`, 
          `*Requested by ${bot.player.queue[i].requester}*`, true);
        }

    msg.channel.send(embed);
};  

exports.help = {
  name: "queue",
  description: "Sends at most the 10 fisrts elements of the queue."
};
