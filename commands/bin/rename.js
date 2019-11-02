exports.run = (bot, msg, args) =>{
    if (! args[0]){
        msg.channel.send("Pas d'argument !").then(message => message.delete(bot.DELAY));
        return;
        }

    msg.guild.members.get(bot.user.id).setNickname(args[0]);

};

exports.help = {
  name: "rename",
  description: "Fait se renommer le bot. xD"
};
