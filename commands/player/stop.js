exports.run = (bot, msg, args, root) =>{
    if (bot.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  bot.player.djrole)){
            bot.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if (msg.guild.me.voiceChannel){
        for (i = bot.player.queue.length; i >= 0; i--){
            bot.player.queue.splice(i, 1);
            }
        bot.player.current.title = undefined;
        bot.player.dispatcher.end();
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
