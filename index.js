//Importation des constantes
const { TOKEN, PREFIX, CMDSEPARATOR } = require('./config');

//Pour Discord
const {Client, Collection} = require('discord.js');
const bot = new Client({ disableEveryOne: true });
const fs = require("fs");

bot.PREFIX = PREFIX;
bot.CMDSEPARATOR = CMDSEPARATOR;
bot.DELAY = 5000;

bot.commands = new Collection();

//fonction qui lit les commandes d'un fichier (en arg) et les ajoutes
function lireCommandes(bot, dossier)
{

  fs.readdir(dossier, (err, files) =>{
      if (err)    return console.error;
      files.forEach(file => {
          if (!file.endsWith(".js"))   return undefined;
          const props = require(`${dossier}${file}`);
          const cmdName = file.split(".")[0];
          console.log(`Commande : ${cmdName}`);

          bot.commands.set(cmdName, props);
      });
  });

}

//lecture des différends sous-dossiers
lireCommandes(bot, "./commands/bin/");
lireCommandes(bot, "./commands/counter/");
lireCommandes(bot, "./commands/store/");

//pour la commande qui compte le nb de fois qu'on dit ...
bot.counters = new Collection();

//pour la banque d'url
bot.urls = new Collection();

//Importation des urls enregistrées, lorsque l'évènement ready se produit : dans ready.js

//doubles noms pour les commandes
bot.aliases = new Collection();
bot.aliases.set("s_reg", "s_register");


bot.on('ready', () => require("./events/ready.js")(bot));
bot.on('message', msg => require("./events/message.js")(bot, msg));
//                  +> non-bot arguments


bot.login(TOKEN);
