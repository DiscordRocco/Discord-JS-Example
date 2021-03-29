const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    var colors = [0x01F5D1, 0x00DDFF];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    
    let embed = new MessageEmbed()
    .setAuthor(`User Info for ${user.username}`)
    .addField("Username:", `${user.tag}`)
    .addField("User ID:", `${user.id}`)
    .setColor(randColor)

    message.channel.send(embed)
    

}

    
    exports.config = {
        aliases: ["evalulate"]
    }
