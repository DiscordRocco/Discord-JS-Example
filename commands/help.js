const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var kissMessage = ["Aww, that's some real love right there", `${message.author} finally had their first hug!`, `Awww I wanted you to hug someone else`, `Cutest couple 2021???`]
  var randMessage = kissMessage[Math.floor(Math.random() * kissMessage.length)];

    const embed = new MessageEmbed()
    .setAuthor('Help!')
    .setColor(randColor)
    .addField('Fun Commands', "`*8ball`, `*bam`,  `*gay`, `*hug`, `*kill`, `*kiss`, `*seggs`", false)
    .addField("Utility Commands", "`*ping`, `*spotify`, `*userinfo`, `*eval`")
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setThumbnail('https://media1.tenor.com/images/89d87de35f15c1d6d00064c48b0e044c/tenor.gif?itemid=15269662')
    .setTimestamp()


message.channel.send(embed)

}
