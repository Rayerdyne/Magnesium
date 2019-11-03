exports.run = (bot, msg, args, root) =>{
    if (!args[0]){
        msg.channel.send("There is no arguments !");
        return;
    }

    if (bot.player.djrole){
        if(!root && !msg.member.roles.find(role => role.name ===  bot.player.djrole)){
            bot.player.toValidate.push(msg);
            msg.channel.send("You are not allowed to ! Wait until a DJ likes your message.");
            return;
        }
    }

    if (args[0].toLowerCase() === "on"){
        if (!bot.player.isLooping){
            bot.player.isLooping = true;
            msg.channel.send("Loop ON.");
            return;
        }
    }
    else if (args[0].toLowerCase() === "off"){
        if (bot.player.isLooping){
            bot.player.isLooping = false;
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
