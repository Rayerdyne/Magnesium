exports.run = (bot, msg, args) =>{

    let enthalt = "**Toutes les entrées enregistrées :**\n`";

    var i = 0;
    bot.urls.forEach((value, key, map) => {
          enthalt = enthalt + '\n' + key + ',';
        });
    enthalt = enthalt + '`'

    msg.channel.send(enthalt);
};


exports.help = {
  name: "list",
  description: "Liste tous les noms enregistrés"
};
