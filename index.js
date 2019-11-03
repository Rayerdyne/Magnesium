//Constants importations
const { TOKEN, PREFIX, CMDSEPARATOR } = require('./config');

const {Client, Collection} = require('discord.js');
const bot = new Client({ disableEveryOne: true });
const fs = require("fs");

bot.PREFIX = PREFIX;
bot.CMDSEPARATOR = CMDSEPARATOR;
bot.DELAY = 5000;

bot.commands = new Collection();

//reads commands and adds them
function readCommands(bot, dossier)
{

  fs.readdir(dossier, (err, files) =>{
      if (err)    return console.error;
      files.forEach(file => {
          if (!file.endsWith(".js"))   return undefined;
          const props = require(`${dossier}${file}`);
          const cmdName = file.split(".")[0];

          bot.commands.set(cmdName, props);
      });
  });

}

//reading sub-folders
readCommands(bot, "./commands/bin/");
readCommands(bot, "./commands/store/");
readCommands(bot, "./commands/player/");


//url bank :
bot.store = new Collection();
bot.store.set("global", new Collection());
bot.curDir = "global";

//Aliases system
bot.aliases = new Collection();
bot.aliases.set("reg", "s_register");
bot.aliases.set("rm", "s_remove");

bot.player = {
    queue: [],
    current: {},
    isLooping: false,
    isPlaying: false,
    toValidate:[],
    dispatcher:{}
}


bot.on('ready', () => require("./events/ready.js")(bot));
bot.on('message', msg => require("./events/message.js")(bot, msg));
bot.on('messageReactionAdd', (messageReaction, user) => require("./events/messageReaction.js")
                (messageReaction, user, bot));


bot.login(TOKEN);
