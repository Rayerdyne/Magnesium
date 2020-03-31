const Discord  = require("discord.js");

exports.run = async (bot, msg, args) => {

    const songInfo = await bot.commands.get("info").run(bot, msg, args.slice(0, 1), true);
    var videos;
    // console.log(songInfo);
    var n = parseInt(args[1]);
    if (!n) 
        n = 10;
    if (n > songInfo.related_videos.length) {
        msg.channel.send("You exceeded the number of related videos availible 😜!");
        n = songInfo.related_videos.length;
    }
    
    videos = songInfo.related_videos.slice(0, n);
    
    const embed = new Discord.RichEmbed()
        .setColor("#10439c")
        .setTitle(`Related to __${songInfo.title}__:`);

    for (let i = 0; i < n; i++) {
        embed.addField(`**${i+1}) - ${videos[i].author}**  `, `__${videos[i].title}__, \
\`https://www.youtube.com/watch?v=${videos[i].id}\`.`);
    }

    msg.channel.send(embed);
};

exports.help = {
  name: "related",
  description: "Sends a summary of video related to the video in argument, wich can be \
the current song, a number of song in queue, an url or a registered url, so that it follows \
the same rules as `info`:\n \
`related cur`    Sends info about the currently played song \n \
`related 1`    Sends info about the first song in queue \n \
`related https://youtubeurl`    Sends info about the video at the given url \n \
`related mySong`    Sends info about the video at url stored in `mySong`."
};
