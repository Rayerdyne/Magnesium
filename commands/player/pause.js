exports.run = (bot, msg, args, root) =>{

    const server = bot.servers[msg.guild.id];
    if (!msg.member.voiceChannel){
        msg.channel.send("You are not connected to a voice channel !");
        return;
    }
    if (!msg.guild.me.voiceChannel){
        msg.channel.send("I'm not connected to a voice channel !");
        return;
    }

    if (server.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  server.player.djrole)){
            server.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if(!server.player.dispatcher.paused){
        server.player.dispatcher.pause();
        msg.channel.send("⏸ Paused !");
    }

};

exports.help = {
  name: "pause",
  description: "Pauses currently played song."
};
