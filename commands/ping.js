const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
    const embed = new MessageEmbed()
    .setAuthor('Ping Info', 'https://cdn.discordapp.com/icons/585464664650022914/d13fa99b65c6fbea8e294f0b197f2961.jpg')
    .setColor(randColor)
    .addField('Latency is:', `${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`, true)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    
message.channel.send(embed)
  }
  exports.config = {
    aliases: ["pong", "pingpong"]
  }