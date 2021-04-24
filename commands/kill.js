const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
    const embed = new MessageEmbed()
    .setAuthor('😈 Murder 😈')
    .setColor(randColor)
    .addField('Death Note', `${message.author} has taken a fat poop on <@${user.id}>'s head.`, true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    
message.channel.send(embed)
  }
  exports.config = {
    aliases: ["murder"]
  }
