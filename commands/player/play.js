const ytdl = require("ytdl-core");

/*Code copied from CodeLyon. I just added some stuff his code.*/
function play (connection, msg, bot)
{
    bot.player.dispatcher = connection.playStream(ytdl(bot.player.queue[0].video_url, {filter: "audioonly"}));

    bot.player.current = bot.player.queue.shift();
    bot.player.isPlaying = true;

    bot.player.dispatcher.on("end", () => {
        if (bot.player.isLooping){
            bot.player.queue.push(bot.player.current);
        }

        if (bot.player.queue[0]){
            bot.player.isPlaying = true;
            play(connection, msg, bot);
        }
        else{
            connection.disconnect();
            bot.player.isPlaying = false;
        }
    });
    return;
}

exports.run = async (bot, msg, args, root) =>{

    if (!args[0]){
        msg.channel.send("There is no arguments !");
        return;
    }

    if (!msg.member.voiceChannel){
        msg.channel.send("You need to be in a voice channel !");
        return;
    }

    if (bot.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  bot.player.djrole)){
            bot.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    var song;
    var i;
    for (i = 0; i < args.length; i++){

        if (bot.store.has(args[i]))
            song = bot.store.get(args[i]);
        else
            song = args[i];

        if (!ytdl.validateURL(song)){
            msg.channel.send(`The url __${song}__ is not valid !`);
            return;
        }

        info = await ytdl.getBasicInfo(song);
        if (msg.member.nickname)
            info.requester = msg.member.nickname;
        else
            info.requester = msg.author.username;

        bot.player.queue.push(info);

        msg.channel.send(`__${bot.player.queue[bot.player.queue.length-1].title}__ added to queue.`);

        const sep = args.splice(i+1, 1);
        if (sep[0] !== '&')
            break;
    }

    if (!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(connection => {
        play (connection, msg, bot);
    });

    return;
};

exports.help = {
  name: "play",
  description: "Plays the given song, through its url or key if stored :\n \
  `play url`\n \
  `play key` , where `key` is registered as a valid url."
};
