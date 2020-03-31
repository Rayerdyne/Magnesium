const ytdl = require("ytdl-core");
const Discord  = require("discord.js");

exports.run = async (bot, msg, args, retInfo) =>{
    const server = bot.servers[msg.guild.id];

    if (!args[0]) {
        msg.channel.send("No arguments provided !");
        return;
    }

    var songInfo;
    if (args[0] === "cur") {
        if (!server.player.current) {
            msg.channel.send("There is no current song being played !");
            return;
        }
        songInfo = server.player.current;
    }
    else if (args[0].match(/[1234567890.]+/)) {
        const i = parseInt(args[0]) - 1;
        if (!server.player.queue[i]) {
            msg.channel.send(`😱 There is no entry n°${i} in the queue !`);
            return;
        }
        songInfo = server.player.queue[i];
    }
    else {
        var songurl = args[0];

        if (!ytdl.validateURL(songurl)){
            songurl = bot.commands.get("get").run(bot, msg, args.slice(0), true, true);

            if (!songurl) {
                msg.channel.send(`😕 The url providen argument is not valid !`);
                return;
            }

            if (!ytdl.validateURL(songurl)){
                msg.channel.send(`The url __${songurl}__ is not valid 😅!`);
                return;
            }
        }
        songInfo = await ytdl.getBasicInfo(songurl);
    }

    if (retInfo) {
        return songInfo;
    }

    const t =  songInfo.length_seconds;
    const min = Math.floor(t / 60);
    const sec = t % 60;
    const embed = new Discord.RichEmbed()
        .setColor("#10439c")
        .setTitle("**Info:**")
        .addField("Title: ", "__" + songInfo.title + "__", true)
        .addField("Author: ", "**" + songInfo.author.name + "**", true)
        .addField("Duration: ", `${min} minute(s) and ${sec} seconds.`, false);

    msg.channel.send(embed);
};


exports.help = {
  name: "info",
  description: "Sends an info about the video in argument, wich can be the current song, \
a number of song in queue, an url or a registered url. I.e.: \n \
`info cur`    Sends info about the currently played song \n \
`info 1`    Sends info about the first song in queue \n \
`info https://youtubeurl`    Sends info about the video at the given url \n \
`info mySong`    Sends info about the video at url stored in `mySong`."
};
