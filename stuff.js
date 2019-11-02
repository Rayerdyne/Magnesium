//tester un role
if (msg.member.roles.find(r => r.name === "Forgeron"))
{
  /*code pour qqn qui est forgeron*/
}

// supprimer un message envoyé après délai
msg.channel.send("Envoyé c'est pesé !").then(message => message.delete(msec));

//obtenir l'id :
msg.author.id

//s'en servir
[user object(le même que author)] = bot.fetchUser(id)

//lire :
let variablee = require('./fichier.json');
console.log(variablee);

//écrire
let donnees = JSON.stringify(variablee);
fs.writeFileSync('fchier.json', donnees);

//gras, italisue, souligné (! discord.js, pas universel):
