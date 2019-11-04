//in case the DJ role is deleted, we want the bot to set it to 'none'

module.exports = (role, bot) => {
    const server = bot.servers[role.guild.id];
    if (!server) return;

    if (role.name === server.djrole){
        server.djrole = undefined;
        role.guild.defaultChannel.send(`DJ deleted because the role ${role.name} has been removed.`);
    }
};
