exports.run = (bot, msg, args) =>{
    msg.channel.send(args.join(" "));
    msg.delete();
};


exports.help = {
  name: "say",
  description: "Repeats what follows the command"
};
