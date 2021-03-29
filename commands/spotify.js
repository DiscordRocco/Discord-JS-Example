const { MessageEmbed } = require('discord.js');
const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient('c415fd2508c4ce3dbe44af1b770dd10a833dfb41');



exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let stuff = user.presence.activities.find(activity => activity.name === "Spotify");
    var colors = [0x01F5D1, 0x00DDFF];
    var randColor = colors[Math.floor(Math.random() * colors.length)];


    

    if (stuff == null){
        const notlisteningembed = new MessageEmbed()
        .setColor(0x1ED760)
        .addField("Error", `<@${user.id}> is not listening to spotify!`)
        message.channel.send(notlisteningembed)
    }
    else{
        console.log(user.presence.activities);
        const userasd = user.presence.activities

        
        async function urlshortner(url) {
            const response = await bitly.shorten(url);
            console.log(`Your shortened bitlink is ${response.link}`);
            const test = new MessageEmbed()
                .setAuthor('Spotify Track Info', 'https://media.discordapp.net/attachments/750491215908044971/797442415979659264/file-spotify-logo-png-4.png?width=461&height=461')
                .setColor(0x1ED760)
                .addField('Song Name', stuff.details, true)
                .addField('Artist Name', stuff.state, false)
                .addField('URL', response.link, false)
                .setThumbnail(`https://i.scdn.co/image/${stuff.assets.largeImage.split("spotify:")[1]}`)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            
            message.channel.send(test)
          }
          urlshortner("https://open.spotify.com/track/"+ stuff.syncID)
    }

}
;
    

