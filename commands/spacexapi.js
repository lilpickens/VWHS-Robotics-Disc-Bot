const Discord = require('discord.js');
const https = require('https');
//const fs = require('fs');

function timeUntil(unix) {
    let date = Date.now()/1000
    let mili = (unix - date)
    let timeUntil = [Math.floor((((mili)/60)/60)/24), Math.floor((((mili)/60)/60)%24), Math.floor(((mili)/60)%60)]
    return timeUntil
};

function nextRQ (channel){
    https.get('https://api.spacexdata.com/v4/launches/next', (resp) => {
        var chunks = [];

        resp.on("data", function (chunk) {
            chunks.push(chunk);
        });

        resp.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            let launchEmbed = new Discord.RichEmbed()
                .setTitle(JSON.parse(body).name)
                .addField('Description:', JSON.parse(body).details)
                .addField('Time Until:', `${timeUntil(JSON.parse(body).date_unix)[0]} days, ${timeUntil(JSON.parse(body).date_unix)[1]} hours, and ${timeUntil(JSON.parse(body).date_unix)[2]} minutes`)
                .setThumbnail(JSON.parse(body).links.patch.large);
            channel.send(launchEmbed);
        });

        resp.on("error", function (error) {
            console.error(error);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};

function spaceX(args, channel) {
    switch(args[1]){
        case 'next':
            nextRQ(channel);
        break;

        default:
            channel.send("Sorry, I don't understand!");
        break;
    }
}

module.exports = {
    spaceX
}