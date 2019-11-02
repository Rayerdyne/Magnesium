exports.run = (bot, msg, args) =>{

      //Vérifications de validité :
      if (! args[0] || ! args[1]) {
          msg.channel.send("Pas assez d'arguments !").then(message => message.delete(bot.DELAY));
          return;
        }

      if (bot.urls.has(args[0])){
          msg.channel.send("Le nom est déjà pris !");
          return;
        }

      bot.urls.set(args[0], args[1]);

      msg.channel.send(`${args[0]} enregistré !`).then(massage => massage.delete(bot.DELAY));
};

exports.help = {
  name: "register",
  description: "Enregistre une url dans la base de données"
};
