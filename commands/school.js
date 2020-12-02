const Discord = require('discord.js');

const schoolStart = new Date(2020, 7, 24);
const schoolEnd = new Date(2021, 4, 20);
const christmasBreak = new Date(2020, 11, 23);
const springBreak = new Date(2021, 2, 13);

//calculates the time since school has started
function timeSinceSchoolStarted() {
    let mili = (Date.now() - schoolStart.getTime())
    let timeSince = [Math.floor((((mili/1000)/60)/60)/24), Math.floor((((mili/1000)/60)/60)%24), Math.floor(((mili/1000)/60)%60)]
    return timeSince
};

//calculates the time until the end of school
function timeUntilSchoolEnds() {
    let mili = (schoolEnd.getTime() - Date.now())
    let timeUntil = [Math.floor((((mili/1000)/60)/60)/24), Math.floor((((mili/1000)/60)/60)%24), Math.floor(((mili/1000)/60)%60)]
    return timeUntil
};

//calculates the time until christmas break
function timeUntilChristmasBreak() {
    let mili = (christmasBreak.getTime() - Date.now())
    let timeUntil = [Math.floor((((mili/1000)/60)/60)/24), Math.floor((((mili/1000)/60)/60)%24), Math.floor(((mili/1000)/60)%60)]
    return timeUntil
};

//calculates the time until spring break
function timeUntilSpringBreak() {
    let mili = (springBreak.getTime() - Date.now())
    let timeUntil = [Math.floor((((mili/1000)/60)/60)/24), Math.floor((((mili/1000)/60)/60)%24), Math.floor(((mili/1000)/60)%60)]
    return timeUntil
};

function school(args, channel) {
    switch(args[1]) {
                        
        //gives the time since school started
        case 'start':
            const schoolStartEmbed = new Discord.RichEmbed()
                .setTitle('Time Since School Started')
                .addField('First Day', 'August 24, 2020')
                .addField('Time Since School Started:', `${timeSinceSchoolStarted()[0]} days, ${timeSinceSchoolStarted()[1]} hours, and ${timeSinceSchoolStarted()[2]} minutes!`)
                .setColor(0x2874a6)
                .setThumbnail('https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/486145_532045433492213_980269600_n.jpg?_nc_cat=109&_nc_oc=AQlwYzILGdWFtQsG36q-_t6mE2sEde9lVDftKmtfybosA0HjmLqfR52EKeEnCoWv82o&_nc_ht=scontent-ort2-1.xx&oh=447009f15f3c911148de2abbfc102cf7&oe=5DE5C97C')
            channel.send(schoolStartEmbed);
        break;

        //gives the time until school ends
        case 'end':
            const schoolEndEmbed = new Discord.RichEmbed()
                .setTitle('Time Until School Ends')
                .addField('Last Day', 'May 20, 2021')
                .addField('Time Until School Ends:', `${timeUntilSchoolEnds()[0]} days, ${timeUntilSchoolEnds()[1]} hours, and ${timeUntilSchoolEnds()[2]} minutes!`)
                .setColor(0x2874a6)
                .setThumbnail('https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/486145_532045433492213_980269600_n.jpg?_nc_cat=109&_nc_oc=AQlwYzILGdWFtQsG36q-_t6mE2sEde9lVDftKmtfybosA0HjmLqfR52EKeEnCoWv82o&_nc_ht=scontent-ort2-1.xx&oh=447009f15f3c911148de2abbfc102cf7&oe=5DE5C97C')
            channel.send(schoolEndEmbed);
        break;

        //gives the time until christmas break
        case 'christmas':
            const christmasBreakEmbed = new Discord.RichEmbed()
                .setTitle('Time Until Christmas Break')
                .addField('Christmas Break', 'December 23, 2020')
                .addField('Time Until Christmas Break:', `${timeUntilChristmasBreak()[0]} days, ${timeUntilChristmasBreak()[1]} hours, and ${timeUntilChristmasBreak()[2]} minutes!`)
                .setColor(0x2874a6)
                .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLWtFZOah6noyQ9kVwDlErUssZfgeKcXvk3k1mxXg_PYme-CO2g')
            channel.send(christmasBreakEmbed);
        break;

        //gives the time until spring break
        case 'spring':
            const springBreakEmbed = new Discord.RichEmbed()
                .setTitle('Time Until Spring Break')
                .addField('Spring Break', 'March 13, 2021')
                .addField('Time Until Spring Break:', `${timeUntilSpringBreak()[0]} days, ${timeUntilSpringBreak()[1]} hours, and ${timeUntilSpringBreak()[2]} minutes!`)
                .setColor(0x2874a6)
                .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_50slRFXONLfSo7rz0dwzkcFDiyLuzIzjo20eP_XLfj-u4-Awg')
            channel.send(springBreakEmbed);
        break;
            
        //the default message if the command isnt finishd or found
        default:
            message.channel.send('Sorry! I don\'t understand!');
    };
};

module.exports = {
    school
}