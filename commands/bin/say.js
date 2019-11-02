exports.run = (bot, msg, args) =>{
    msg.channel.send(args.join(" "));
    msg.delete();
};


exports.help = {
  name: "say",
  description: "Répète tout ce qui suit la commande, puis supprime le message original."
};
