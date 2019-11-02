exports.run = (bot, msg, args) =>{

    let content = "**All keys registered :**\n`";

    bot.store.forEach((value, key, map) => {
          content = content + key + ','+ '\n';
        });
    content = content.substring(0, content.length - 1) + '`'

    msg.channel.send(content);
};


exports.help = {
  name: "s_list",
  description: "Lists all keys registered."
};
