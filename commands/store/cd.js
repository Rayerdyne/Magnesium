exports.run = (bot, msg, args) =>{
    const server = bot.servers[msg.guild.id];
    
    if (!args[0]){
        msg.channel.send("🙊 No arguments provided !");
        return;
    } else if (args[0] === ".."){
        server.curDir = "global";
        msg.channel.send(`Current directory set to **${server.curDir}**.`);
        return;
    } else if (!server.store.has(args[0])){
        msg.channel.send(`**${args[0]}** folder does not exists 😭.`);
        return;
    } else {
        server.curDir = args[0];
        msg.channel.send(`📂 Current directory set to **${server.curDir}**.`);
    }

};


exports.help = {
  name: "cd",
  description: "Changes the current directory.\n \
The bot automatically saves and searches new elements in this one, unless it is specified. \n \
`cd myDir` sets it to **myDir**\n \
`cd ..` sets it to **global**."
};
