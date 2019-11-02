exports.run = (bot, msg, args) =>{

      //Vérifications de validité :
      if (! args[0] || ! args[1]) {
          msg.channel.send("Not enough arguments !");
          return;
        }

      if (bot.store.has(args[0])){
          msg.channel.send(`\`${args[0]}\` already exists.`);
          return;
        }

      bot.store.set(args[0], args[1]);

      msg.channel.send(`\`${args[0]}\` registered!`);
};

exports.help = {
  name: "s_register",
  description: "Registers an url. Use :\n \
`register key url`\n \
Alias : `s_reg`"
};
