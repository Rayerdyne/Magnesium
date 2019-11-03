exports.run = (bot, msg, args) =>{
    msg.channel.send(`Currently working in ${bot.curDir}.`);

};

exports.help = {
  name: "tell",
  description: "Tells current directory."
};
