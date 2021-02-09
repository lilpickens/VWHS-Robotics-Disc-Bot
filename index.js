try {
//ROBOBOT
const Discord = require('discord.js');
const bot = new Discord.Client();
const Attachment = new Discord.Attachment();
const token = 'NjA0NTM3OTY2NjQ3NDQzNDU4.XTvZ5Q.Votfx699Fwt4oRGReYpzRHH8XsE'
//required command modules
const help = require('./commands/help.js');
const ping = require('./commands/pong.js');
const ftc = require('./commands/ftc.js');
const frc = require('./commands/frc.js');
const school = require('./commands/school.js');
const meme = require('./commands/meme.js');
const stats = require('./commands/ftcstatsapi.js');

const spaceX = require('./commands/spacexapi.js');

const prefix = '>';
let version = '2.0'


//writes in console and sets bots discord activity
bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('for >help', {type: "WATCHING"}).catch(console.error);
});

//Welcome message for new server members
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome")
    if(!channel) return;

    channel.send(`Welcome to the VWHS Robotics Discord Server, ${member}! Please read the info channel!`)
})


//The main body of command code
bot.on('message', message =>{
    if (message.author.bot || !message.content.startsWith('>')) return; 

    let args = message.content.substring(prefix.length).split(" ") ;

    switch(args[0]) {
            
        //help command dms user server commands
        case 'help':
            help.help(message.author);
        break;


        //ping command responds with pong to check if the bot is online
        case 'ping':
            ping.pong(message.channel);
        break;
        


        //the command first argument ftc, any commands for ftc will be here
        case 'ftc':
            ftc.ftc(args, message.channel);
        break;



        //the command first argument frc, any commands for frc will be here
        case 'frc':
            frc.frc(args, message.channel);
        break;



        //the command first arguement school, any commands for school will be here
        case 'school':
            school.school(args, message.channel);
        break;

        case 'meme':
            meme.meme(message.channel);
        break;

        case 'spacex':
            spaceX.spaceX(args, message.channel);
        break;

        case 'stats':
            stats.stats(args, message.channel);
        break;

        //the command first arguement for any role assigning
        case 'role':
            switch(args[1]) {

                //gives the 5501 role
                case '5501':
                    let member1 = message.guild.member(message.author);
                    member1.addRole(member1.guild.roles.find(role => role.id == "571800877682262016"));
                    message.channel.send('You now have that role!')
                break;

                //gives the 14174 role
                case '14174':
                    let member2 = message.guild.member(message.author);
                    member2.addRole(member2.guild.roles.find(role => role.id == "571800771478290453"));
                    message.channel.send('You now have that role!')
                break;

                //gives the programmer role
                case 'programmer':
                    let member3 = message.guild.member(message.author);
                    member3.addRole(member3.guild.roles.find(role => role.id == "571811553721188393"));
                    message.channel.send('You now have that role!')
                break;

                //gives the frc role
                case 'frc':
                    let member4 = message.guild.member(message.author);
                    member4.addRole(member4.guild.roles.find(role => role.id == "604787698036899841"));
                    message.channel.send('You now have that role!')
                break;

                case 'alumni':
                    let member6 = message.guild.member(message.author);
                    member6.addRole(member6.guild.roles.find(role => role.id == "759624677156061194"));
                    message.channel.send('You now have that role!')
                break;

                case 'crewmate':
                    let member5 = message.guild.member(message.author);
                    member5.addRole(member5.guild.roles.find(role => role.id == "758455063063953419"));
                    message.channel.send('You now have that role!')
                break;

                case 'imposter':
                    message.channel.send('https://cdn.discordapp.com/attachments/755580017433378877/758457452906676295/340.png')
                break;

                //the default message if the command isnt finished or found
                default:
                    message.channel.send('Sorry! I don\'t understand!');
            };
        break;

        //the default message if the command isnt finished or found
        default:
            message.channel.send('Sorry! I don\'t understand!');
    }
});

bot.login(token);

}

catch (err) {
    console.log(err)
}