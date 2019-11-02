exports.run = (bot, msg) =>{
    msg.channel.send(`Hello ${msg.author.username}`);

};

exports.help = {
  name: "hello",
  description: "This polite bot answers to hello."
};
