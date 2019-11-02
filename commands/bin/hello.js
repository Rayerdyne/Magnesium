exports.run = (bot, msg) =>{
    // msg.channel.('Pong ! ' + msg.author.username);
    msg.channel.send(`Hello ${msg.author.username}`);

};

exports.help = {
  name: "hello",
  description: "Répond quand on dit bonjour. Ça s'appelle la politesse."
};
