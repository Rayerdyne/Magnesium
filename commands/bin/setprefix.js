exports.run = (bot, msg, args) =>{
    const server = bot.servers[msg.guild.id];
    if (! args[0]){
          msg.channel.send("No argument provided.");
          return;
        }
    server.prefix = args[0];
    msg.channel.send(`Prefix set to : \`${server.prefix}\``);

    bot.commands.get("save").run(bot, msg, args, true);
};

exports.help = {
  name: "setprefix",
  description: "Sets bot's prefix."
};
