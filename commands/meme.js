const Discord = require('discord.js');

function meme(channel) {
    channel.send(MemeLinks[Math.floor(Math.random() * MemeLinks.length)])
}

let MemeLinks = [
    'https://cdn.discordapp.com/attachments/755580017433378877/756648493828931644/1594230310570.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756648502922182736/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756648597700870184/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756648677845762085/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756648854274965564/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756648896343572491/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756648933329076378/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649028921327626/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649126774571088/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649162216439948/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649210996326454/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649254478413964/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649286820692081/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649315962978394/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649343527944254/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649390071873556/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649424033153064/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649464722358274/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649526525165768/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649710541996124/tumblr_pkmygk4poT1wpvh5e_540.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649714690031676/tumblr_pkmygiBKFH1wpvh5e_540.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649717194031185/kz3abi7xctvz.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649719203102730/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649816783716452/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649819338047620/image0.png',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649866947723264/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649892478320750/image0.png',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649975177281636/Screenshot_20200916-122750_Reddit.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649976980832396/Screenshot_20200916-122649_Reddit.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756649978759217152/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650018903162960/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650044874293328/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650083608428604/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650147189882890/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650371895787620/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650409300590602/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650552406048788/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650581346615407/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650605354942474/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650783935561798/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650826461741186/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650948268523613/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756650992749248582/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651019995185152/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651052727533638/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651100412706886/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651140535550033/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651215747547140/Screenshot_20200918-113804_Reddit.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651284530200767/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651327592857630/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651374095237181/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651418055737463/image0.jpg',
    'https://cdn.discordapp.com/attachments/755580017433378877/756651467238015018/image.png'
]

module.exports = {
    meme
};