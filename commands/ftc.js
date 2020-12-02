const Discord = require('discord.js');

//const ftcOhio = new Date(2020, 2, 13, 14);

//calculates the time until ohio championship
function timeUntillOhioChampionship() {
    let mili = (ftcOhio.getTime() - Date.now())
    let timeUntil = [Math.floor((((mili/1000)/60)/60)/24), Math.floor((((mili/1000)/60)/60)%24), Math.floor(((mili/1000)/60)%60)]
    return timeUntil
};


function ftc(args, channel){
    switch(args[1]) {

        //gives the time until ftc kickoff
        /*
        case 'ohio':
            const ohioChampEmbed = new Discord.RichEmbed()
                .setTitle('First Tech Challenge Ohio Championship')
                .addField('Skystone', 'March 13, 2020')
                .addField('Time Until Kickoff:', `${timeUntillOhioChampionship()[0]} days, ${timeUntillOhioChampionship()[1]} hours, and ${timeUntillOhioChampionship()[2]} minutes!`)
                .setColor(0x2874a6)
                .setThumbnail('https://i.ytimg.com/vi/SRF6ADFgEIE/maxresdefault.jpg')
            channel.send(ohioChampEmbed);
        break;
        */

        case 'intro':
            channel.send("https://www.youtube.com/watch?v=WEFQCXidh54");
        break;

        //this is the default message if the command isnt finished or found
        default:
            channel.send('Sorry! I don\'t understand!');
        };
};

module.exports = {
    ftc
}