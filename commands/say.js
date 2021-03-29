const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  const question2 = args.join(' ');
  const question = message.content.split(' ').slice(1).join(' ')
  var seggsmessages = ["Don't finish too soon!", `${message.author} only lasted 2 seconds...`, `Christ <@${user.id}> moans so loud...`]
  var randMessage = seggsmessages[Math.floor(Math.random() * seggsmessages.length)];
    const embed = new MessageEmbed()
    .setAuthor('Say')
    .setColor(randColor)
    .addField('Message:', `${question}`, true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()


message.channel.send(embed)
exports.config = {
    aliases: ["sex", "fuck"]
  }
  }
