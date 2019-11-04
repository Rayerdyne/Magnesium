exports.run = (bot, msg, args) =>{

    const server = bot.servers[msg.guild.id];
    msg.channel.send(`Currently working in ${server.curDir}.`);

};

exports.help = {
  name: "tell",
  description: "Tells current directory."
};
