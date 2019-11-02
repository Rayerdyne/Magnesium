exports.run = (bot, msg, args) =>{

    let enthalt = "**All keys registered :**\n`";

    bot.urls.forEach((value, key, map) => {
          enthalt = enthalt + '\n' + key + ',';
        });
    enthalt = enthalt + '`'

    msg.channel.send(enthalt);
};


exports.help = {
  name: "s_list",
  description: "Lists all keys registered."
};
