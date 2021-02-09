const Discord = require('discord.js');
const https = require('https');
var request = require('request');

var firstOptions = {
  'method': 'POST',
  'url': 'https://dynamic.jackcrane.rocks/api/ftcstats/fetch.php',
  'headers': {
    'Accept': 'application/json'
  },
  formData: {
    'hide_instructions': 'true',
    'location': 'ohio'
  }
};

var CROptions = {
    'method': 'POST',
    'url': 'https://dynamic.jackcrane.rocks/api/ftcstats/fetch.php',
    'headers': {
      'Accept': 'application/json'
    },
    formData: {
      'hide_instructions': 'true',
      'location': 'ohio',
      'teamname': 'Cougar Robotics'
    }
};

var VWOptions = {
    'method': 'POST',
    'url': 'https://dynamic.jackcrane.rocks/api/ftcstats/fetch.php',
    'headers': {
      'Accept': 'application/json'
    },
    formData: {
      'hide_instructions': 'true',
      'location': 'ohio',
      'teamname': 'VW Robotics'
    }
};

function firstRQ(channel) {
    request(firstOptions, function (error, response) {
        if (error) throw new Error(error);
        let firstEmbed = new Discord.RichEmbed()
            .setTitle(JSON.parse(response.body).data[0].teamname)
            .addField('OPR:', JSON.parse(response.body).data[0].normalized_opr)
            .addField('Max Score: ', JSON.parse(response.body).data[0].max_np_score)
            .addField('Auto OPR', JSON.parse(response.body).data[0].auto_opr_c)
            .addField('Rank:', JSON.parse(response.body).data[0].rank)
        channel.send(firstEmbed);
      });
}

function CRRQ(channel) {
    request(CROptions, function (error, response) {
        if (error) throw new Error(error);
        let firstEmbed = new Discord.RichEmbed()
            .setTitle(JSON.parse(response.body).data[0].teamname)
            .addField('OPR:', JSON.parse(response.body).data[0].normalized_opr)
            .addField('Max Score: ', JSON.parse(response.body).data[0].max_np_score)
            .addField('Auto OPR:', JSON.parse(response.body).data[0].auto_opr_c)
            .addField('Quals Rank:', JSON.parse(response.body).data[0].quals_rank)
            .addField('Rank:', JSON.parse(response.body).data[0].rank)
        channel.send(firstEmbed);
      });
}

function VWRQ(channel) {
    request(VWOptions, function (error, response) {
        if (error) throw new Error(error);
        let firstEmbed = new Discord.RichEmbed()
            .setTitle(JSON.parse(response.body).data[0].teamname)
            .addField('OPR:', JSON.parse(response.body).data[0].normalized_opr)
            .addField('Max Score: ', JSON.parse(response.body).data[0].max_np_score)
            .addField('Auto OPR:', JSON.parse(response.body).data[0].auto_opr_c)
            .addField('Quals Rank:', JSON.parse(response.body).data[0].quals_rank)
            .addField('Rank:', JSON.parse(response.body).data[0].rank)
        channel.send(firstEmbed);
      });
}


function stats(args, channel) {
    switch(args[1]){
        case 'first':
            firstRQ(channel);
        break;

        case '14174':
            CRRQ(channel);
        break;

        case '5501':
            VWRQ(channel);
        break;

        default:
            channel.send("Sorry, I don't understand!");
        break;
    }
}

module.exports = {
    stats
}