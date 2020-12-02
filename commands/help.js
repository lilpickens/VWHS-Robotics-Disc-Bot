const Discord = require('discord.js');

function help(author) {
    const helpEmbed1 = new Discord.RichEmbed()
            .setTitle('Robobot Commands (1/2)')
            .addField('General Commands', '>help, >ping')
            .addField('>help', 'Provides a list of all available commands.')
            .addField('>ping', 'A test command to test if the bot is active.')
            .addField('Role Commands', '>role 5501, >role 14174, >role frc, >role programmer, >role crewmate')
            .addField('>role', 'Provides the selected role.')
            .addField('School Commands', '>school start, >school christmas, >school spring, >school end')
            .addField('>school', 'Provides a countdown/timer until/since the selected event.')
            .setColor(0xdf1111)
        author.send(helpEmbed1);
        
        const helpEmbed2 = new Discord.RichEmbed()
            .setTitle('Robobot Commands (2/2)')
            .addField('Ftc Commands', 'No Commands at this time')
            //.addField('>ftc kickoff', 'Gives the time until/since the Ohio ftc Championships.')
            .addField('Frc Commands', '>frc kickoff')
            .addField('>frc kickoff', 'Gives the time until/since the frc kickoff.')
            .setFooter('Have and idea for the bot? Tell Ethan!')
            .setColor(0xdf1111)
        author.send(helpEmbed2);
};

module.exports = {
    help
};