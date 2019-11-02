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

var reg = new RegExp(/\d/g);
if (!reg.test(args[0])){
  msg.channel.send("Argument is not a number !");
  return;
}
const index = parseInt(args[0]) - 1;
if (index <= 0){
  msg.channel.send("Argument is negative !");
  return;
} else if (index > bot.player.queue.length){
  msg.channel.send("Argument value exceeds queue's length !");
  return;
}

const removed = bot.player.queue.splice(index, 1);
msg.channel.send(`${removed[0].title} removed from queue !`);

};

exports.help = {
  name: "remove",
  description: "Removes the {arg} element from the queue."
};
