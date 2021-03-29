const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var seggsmessages = ["Don't finish too soon!", `${message.author} only lasted 2 seconds...`, `Christ <@${user.id}> moans so loud...`]
  var randMessage = seggsmessages[Math.floor(Math.random() * seggsmessages.length)];
    const embed = new MessageEmbed()
    .setAuthor('😈 Seggs 😈')
    .setColor(randColor)
    .addField('Seggsed', `${message.author} is railing <@${user.id}>, ${randMessage}`, true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()


message.channel.send(embed)
exports.config = {
    aliases: ["sex", "fuck"]
  }
  }
