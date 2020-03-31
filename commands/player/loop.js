exports.run = (bot, msg, args, root) =>{

    const server = bot.servers[msg.guild.id];
    if (!args[0]){
        msg.channel.send("🙊 There is no arguments !");
        return;
    }

    if (server.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  server.player.djrole)){
            server.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if (args[0].toLowerCase() === "on"){
        if (!server.player.isLooping){
            server.player.isLooping = true;
            msg.channel.send("Loop ON.");
            return;
        }
    }
    else if (args[0].toLowerCase() === "off"){
        if (server.player.isLooping){
            server.player.isLooping = false;
            msg.channel.send("Loop OFF.");
            return;
        }
    }
    else {
        msg.channel.send("Please provide `on` or `off` !");
        return;
    }
};

exports.help = {
  name: "ping",
  description: "Defines if the bot loops the current queue : precise `on` or `off`."
};
