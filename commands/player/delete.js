exports.run = (bot, msg, args, root) =>{

  const server = bot.servers[msg.guild.id];
  if (!msg.member.voiceChannel){
    msg.channel.send("You are not connected to a voice channel 🙃!");
    return;
}
if (!msg.guild.me.voiceChannel){
    msg.channel.send("I'm not connected to a voice channel 🙃!");
    return;
}

if (server.player.djrole){
    if(!root && !msg.member.roles.find(role => role.name ===  server.player.djrole)){
        server.player.toValidate.push(msg);
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
if (index < 0){
  msg.channel.send("😠 Argument is negative !");
  return;
} else if (index > server.player.queue.length){
  msg.channel.send("Argument value exceeds queue's length 😔!");
  return;
}

const removed = server.player.queue.splice(index, 1);
msg.channel.send(`${removed[0].title} removed from queue 😉!`);
// console.log(server.player.queue.slice(index, 1)[0].title);

};

exports.help = {
  name: "delete",
  description: "Deletes an element from the queue :\n \
Example :  `delete 2`"
};
