const cheerio = require("cheerio");
const request = require("request");

exports.run = (bot, msg, args) =>{

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args.join(' '),
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    
    request(options, (error, response, responseBody) => {
        if (error) {
            return;
        }
    
        $ = cheerio.load(responseBody);
        var links = $(".image a.link");
    
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
    
        if (!urls.length) {
            return;
        }
    
        // Send result
        msg.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });//request
}

exports.help = {
  name: "image",
  description: "Sends a random image from the web on base of arguments."
};
