exports.run = (bot, msg, args) =>{
    if (! args[0]){
        msg.channel.send("No arguments provided !");
        return;
        }

    msg.guild.members.get(bot.user.id).setNickname(args[0]);

};

exports.help = {
  name: "rename",
  description: "Makes the bot rename itself."
};
