const ytdl = require("ytdl-core");

/*Code copied from CodeLyon. I just added some stuff his code.*/
function play (connection, msg)
{
    bot.player.dispatcher = connection.playStream(ytdl(bot.player.queue[0], {filter: "audioonly"}));

    bot.player.current = bot.player.queue.shift();
    bot.player.isPlaying = true;

    bot.player.dispatcher.on("end", () => {
        if (bot.player.isLooping)
            bot.player.queue.push(bot.player.current);

        if (bot.player.queue[0]){
            bot.player.isPlaying = true;
            play(connection, msg);
        }
        else{
            connection.disconnect();
            bot.player.isPlaying = false;
        }
    });
    return;
}

exports.run = (bot, msg, args, root) =>{

    if (!args[0]){
        msg.channel.send("There is no arguments !");
        return;
    }

    if (!msg.member.voiceChannel){
        msg.channel.send("You need to be in a voice channel !");
        return;
    }

    if (bot.player.djrole){
        if(!root && !msg.member.roles.find(bot.player.djrole)){
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if (bot.store.has(args[0]))
        args[0] = bot.store.get(args[0]);

    bot.player.queue.push(args[0]);

    if (!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(connection => {
        play (connection, msg);
    });

    return;
};

exports.help = {
  name: "play",
  description: "Plays the given song, through its url or key if stored :\n \
  `play url`\n \
  `play key` , where `key` is registered as a valid url."
};
