exports.run = (bot, msg, args, root) =>{
    if (!msg.member.voiceChannel){
        msg.channel.send("You are not connected to a voice channel !");
        return;
    }
    if (!msg.guild.me.voiceChannel){
        msg.channel.send("I'm not connected to a voice channel !");
        return;
    }

    if (bot.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  bot.player.djrole)){
            bot.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if (bot.player.dispatcher)
        bot.player.dispatcher.end();

};

exports.help = {
  name: "skip",
  description: "Skips currently played song."
};
