const Discord = require('discord.js');
//const https = require('follow-redirects').https;
const https = require('https');
const fs = require('fs');

/*
var launchesOptions = {
    'method': 'GET',
    'hostname': 'api.spacexdata.com',
    'path': '/v4/launches/upcoming',
    'headers': { 
    },
    'maxRedirects': 40
};
*/
function nextRQ (channel){
https.get('https://api.spacexdata.com/v4/launches/next', (resp) => {
    var chunks = [];

    resp.on("data", function (chunk) {
        chunks.push(chunk);
    });

    resp.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
        //console.log(JSON.parse(body).name);
        channel.send(JSON.parse(body).name.toString());
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