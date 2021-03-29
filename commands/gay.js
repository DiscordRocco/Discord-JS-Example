const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var randNumber = Math.floor(Math.random() * 100) + 1 
    const embed = new MessageEmbed()
    .setAuthor('🏳️‍🌈 Gay 🏳️‍🌈')
    .setColor(randColor)
    .addField('Gay Rate', `<@${user.id}> is ${randNumber}% gay`, true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()


message.channel.send(embed)
exports.config = {
    aliases: ["sex", "fuck"]
  }
  }
