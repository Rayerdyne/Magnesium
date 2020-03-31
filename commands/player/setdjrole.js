exports.run = (bot, msg, args) =>{

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

    if (args[0] === "none"){
      server.player.djrole = undefined;
      msg.channel.send("🙊 There is no DJ role.");
      return;
      }

    if (!msg.member.roles.find(role => role.name ===  args[0])){
        msg.channel.send("😑 Given role does not exists, or you don't have it.");
        return;
    }

    server.player.djrole = args[0];
    msg.channel.send(`😎 The DJ role hes been set to **${args[0]}.**`);

};

exports.help = {
  name: "ping",
  description: "Sets the DJ role.\n \
`setdjrole DJrole` or \n \
`setdjrole none` to enable everyone."
};
