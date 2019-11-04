const ytdl = require("ytdl-core");

/*Code copied from CodeLyon. I just added some stuff his code.*/
function play (connection, msg, player)
{
    player.dispatcher = connection.playStream(ytdl(player.queue[0].video_url, {filter: "audioonly"}));

    player.current = player.queue.shift();
    player.isPlaying = true;

    player.dispatcher.on("end", () => {
        if (player.isLooping){
            player.queue.push(player.current);
        }

        if (player.queue[0]){
            player.isPlaying = true;
            play(connection, msg, player);
        }
        else{
            connection.disconnect();
            player.isPlaying = false;
        }
    });
    return;
}

exports.run = async (bot, msg, args, root) =>{

    const server = bot.servers[msg.guild.id];

    if (!args[0]){
        msg.channel.send("There is no arguments !");
        return;
    }

    if (!msg.member.voiceChannel){
        msg.channel.send("You need to be in a voice channel !");
        return;
    }

    if (server.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  server.player.djrole)){
            server.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    var song;
    var i;
    for (i = 0; i < args.length; i++){

        song = bot.commands.get("get").run(bot, msg, args.slice(i), true);
        if (!song)
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

        server.player.queue.push(info);

        msg.channel.send(`__${server.player.queue[server.player.queue.length-1].title}__ added to queue.`);

        const sep = args.splice(i+1, 1);
        if (sep[0] !== '&')
            break;
        else if (sep === '-s'){
            forReg[0] = args.splice(i+1, 1);
            forReg[1] = args[i];
            if (args.slice(i+1, 1)[0] === "in"){
                forReg[2] = "in";
                forReg[3] = args.splice(i+1, 2)[1];
            }
            bot.commands.get("register").run(bot, msg, forReg);
        }
    }

    if (!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(connection => {
        play (connection, msg, server.player);
    });

    return;
};

exports.help = {
  name: "play",
  description: "Plays the given song, through its url or key if stored :\n \
  `play url`\n \
  `play key` , where `key` is registered as a valid url.\n \
  `key` is searched in the current directory (see `cd` command) if not specified :\n \
  `play key in myDir`."
};
