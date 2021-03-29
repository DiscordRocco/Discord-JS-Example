const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var kissMessage = ["Aww, that's some real love right there", `${message.author} finally had their first hug!`, `Awww I wanted you to hug someone else`, `Cutest couple 2021???`]
  var randMessage = kissMessage[Math.floor(Math.random() * kissMessage.length)];

    const embed = new MessageEmbed()
    .setAuthor('🔨 Bammed 🔨')
    .setColor(randColor)
    .addField('Bammed', `Successfully bammed <@${user.id}>`, false)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setThumbnail('https://media1.tenor.com/images/18bb16cd4934a763015313c5baa36b8d/tenor.gif?itemid=18884723')
    .setTimestamp()


message.channel.send(embed)
user.send(`You were bammed in Team F4llout by ${message.author}`)

}
