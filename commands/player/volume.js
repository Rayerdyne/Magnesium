exports.run = (bot, msg, args) =>{
    const server = bot.servers[msg.guild.id];
    if (!args[0]) {
        msg.channel.send("You need to provide a volume !");
        return;
    }

    if (!args[0].match(/[0123456789.]/)) {
        msg.channel.send(`❗ Invalid volume **${args[0]}** provided !`);
        return;
    }
    const n = parseFloat(args[0]);
    if (!server.player.dispatcher) {
        msg.channel.send("🙊 I'm not currently playing !");
    }
    if (n > 5.0) {
        msg.channel.send("❌ Please no ! ❌");
        return;
    }
    server.player.dispatcher.setVolumeLogarithmic(n);
    msg.channel.send(`🔉 Volume set to ** ${n}**.`);

};

exports.help = {
  name: "volume",
  description: "Sets the bot playing volume."
};
