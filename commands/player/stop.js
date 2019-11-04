exports.run = (bot, msg, args, root) =>{

  const server = bot.servers[msg.guild.id];
    if (server.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  server.player.djrole)){
            server.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if (msg.guild.me.voiceChannel){
        for (i = server.player.queue.length; i >= 0; i--){
            server.player.queue.splice(i, 1);
            }
        server.player.current.title = undefined;
        server.player.dispatcher.end();
        msg.channel.send("Stopped.");
    }

    if (msg.guild.connection){
        msg.guild.voiceConnection.disconnect();
    }
};

exports.help = {
  name: "ping",
  description: "Stops the music and clears the queue."
};
