exports.run = (bot, msg, args) =>{
    if (!args[0]){
        msg.channel.send("You need to provide an argument !");
        return;
    } else if (args[0] === ".."){
        bot.curDir = "global";
        msg.channel.send(`Current directory set to **${bot.curDir}**.`);
        return;
    } else if (!bot.store.has(args[0])){
        msg.channel.send(`**${args[0]}** folder does not exists.`);
        return;
    } else {
        bot.curDir = args[0];
        msg.channel.send(`Current directory set to **${bot.curDir}**.`);
    }

};


exports.help = {
  name: "cd",
  description: "Changes the current directory.\n \
The bot automatically saves and searches new elements in this one, unless it is specified. \n \
`cd myDir` sets it to **myDir**\n \
`cd ..` sets it to **global**."
};
