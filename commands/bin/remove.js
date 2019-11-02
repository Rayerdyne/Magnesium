exports.run = (bot, msg, args) =>{
    if (!args[0])
        return;

    msg.channel.bulkDelete(args[0]);
};

exports.help = {
  name: "remove",
  description: "Supprime le nombre de messages donné en argument."
};
