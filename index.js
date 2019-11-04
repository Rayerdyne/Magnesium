//Constants importations
const { TOKEN, PREFIX, CMDSEPARATOR } = require("./config");

const {Client, Collection} = require("discord.js");
const bot = new Client({ disableEveryOne: true });
const fs = require("fs");

bot.cmdseparator = CMDSEPARATOR;

bot.commands = new Collection();

//reads commands and adds them
function readCommands(bot, folder)
{

  fs.readdir(folder, (err, files) =>{
      if (err)    return console.error;
      files.forEach(file => {
          if (!file.endsWith(".js"))   return undefined;
          const props = require(`${folder}${file}`);
          const cmdName = file.split(".")[0];

          bot.commands.set(cmdName, props);
      });
  });

}

//reading sub-folders
readCommands(bot, "./commands/bin/");
readCommands(bot, "./commands/store/");
readCommands(bot, "./commands/player/");

//Aliases system
bot.aliases = new Collection();
bot.aliases.set("reg", "register");

bot.servers = {};


bot.on("ready", () => require("./events/ready.js")(bot));
bot.on("message", msg => require("./events/message.js")(bot, msg));
bot.on("messageReactionAdd", (messageReaction, user) => require("./events/messageReaction.js")
                (messageReaction, user, bot));
bot.on("roleDelete", role => require("./events/roleDelete.js")(role, bot));


bot.login(TOKEN);
