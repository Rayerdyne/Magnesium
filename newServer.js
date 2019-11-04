const { Collection } = require("discord.js");
const { PREFIX } = require("./config");

module.exports = () => {

var server;
server = {
    //player :
    player: {
        queue: [],
        current: {},
        isLooping: false,
        isPlaying: false,
        toValidate:[],
        dispatcher:{},
        djrole: undefined
    },
    //url bank :
    store: new Collection(),
    curDir: "global",
    prefix:     PREFIX
};

server.store.set("global", new Collection());
return server;
};