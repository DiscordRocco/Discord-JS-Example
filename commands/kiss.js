const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var kissMessage = ["Aww, that's some real love right there", `${message.author} finally had their first kiss!`, `Awww I wanted you to kiss someone else`, `Cutest couple 2021???`]
  var randMessage = kissMessage[Math.floor(Math.random() * kissMessage.length)];

    const embed = new MessageEmbed()
    .setAuthor('💋 Kiss 💋')
    .setColor(randColor)
    .addField('* Smooch * ', `${randMessage}`, false)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setThumbnail('https://media.tenor.com/images/570f598e4ced1a317d90edff0177abc4/tenor.gif')
    .setTimestamp()


message.channel.send(embed)

}
