const { MessageEmbed, version: djsversion } = require('discord.js');
const Discord = require('discord.js');
const Beautify = require('beautify');
const ms = require('ms');
const { version } = require('../package.json');
const config = require('../config.json');



exports.run = (client, message, args) => {
    const owners = ["670895157016657920"];
    var colors = [0x01F5D1, 0x00DDFF];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    if (!owners.includes(message.author.id)) return message.channel.send("You can not use this command as you are not a F4llout Bot Developer.")
    
    if (!args[0]) return message.channel.send("You need to evaluate _**SOMETHING**_ Please!")
  
    
    try {
      if (args.join(" ").toLowerCase().includes("token")) {
        return message.reply("I can't tell you my token, sorry.")
      }
      
      const toEval = args.join(" ");
      const evaluated = eval(toEval);
      const start = process.hrtime();
      const difference = process.hrtime(start);
  
      let embed = new MessageEmbed()
      .addField("📥 Input:", `\`\`\`js\n${Beautify(args.join(" "), { format: "js" })}\n\`\`\``)
      .addField("📤 Output:", `\`\`\`js\n${evaluated}\`\`\``)
      .addField("⏰ Time:",`\`\`\`js\n${difference[0] > 0 ? `${difference[0]}s ` : ""}${difference[1] / 1e6}ms\`\`\``)
      .setColor(randColor)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      message.channel.send(embed);
      
    } catch (e) {
      let errorembed = new MessageEmbed()
      .addField("\:x: Error!")
      .setDescription(e)
      .setTimestamp()
      .setColor(randColor)
      .setFooter(`${message.author.tag}`, client.user.displayAvatarURL())
      message.channel.send(errorembed);
    }

  exports.config = {
    aliases: ["evalulate"]
  }
}