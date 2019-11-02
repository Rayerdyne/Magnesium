exports.run = (bot, msg, args) =>{
    msg.channel.send("Pong !");

};

exports.help = {
  name: "ping",
  description: "Répond pong quand on dit ping. C'est tout."
};
