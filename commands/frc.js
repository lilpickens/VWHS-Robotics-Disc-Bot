const Discord = require('discord.js');

//const frcKickoff = new Date(2020, 0, 4);

//calculates the time until frc kickoff
/*
function timeUntillFrcKickoff() {
    let mili = (frcKickoff.getTime() - Date.now())
    let timeUntil = [Math.floor((((mili/1000)/60)/60)/24), Math.floor((((mili/1000)/60)/60)%24), Math.floor(((mili/1000)/60)%60)]
    return timeUntil
};
*/

function frc(args, channel) {
    switch(args[1]) {

        //gives the time until frc kickoff
        case 'kickoff':
                const frcKickoffEmbed = new Discord.RichEmbed()
                    .setTitle('First Robotics Competition Kickoff')
                    .addField('No Season Name has been Announced', 'No Date has been Announced')
                    //.addField('Time Until Kickoff:', `${timeUntillFrcKickoff()[0]} days, ${timeUntillFrcKickoff()[1]} hours, and ${timeUntillFrcKickoff()[2]} minutes!`)
                    //.setColor(0x2874a6)
                    //.setThumbnail('https://www.firstinspires.org/sites/default/files/uploads/rightimage/infinite-recharge-web-promo_0.png')
                channel.send(frcKickoffEmbed);
        break;

        //the default message if the command isnt finishd or found
        default:
            channel.send('Sorry! I don\'t understand!');
    };
};

module.exports = {
    frc
};