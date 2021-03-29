const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var ballmessage = ["As I see it, yes.", `Answer Unclear, Ask again later.`, `Better not tell you now.`, `Cannot predict now.`, `Concentrate and ask again.`, `Don’t count on it.`, `It is certain.`, `It is decidedly so.`, `Most likely.`, `My reply is no.`, `My sources say no.`, `Outlook not so good.`, `Outlook good.`, `Reply hazy, try again.`, `Signs point to yes.`, `Very doubtful.`, `Without a doubt.`, `Yes.`, `Yes – definitely.`, `You may rely on it.`]
  var randMessage = ballmessage[Math.floor(Math.random() * ballmessage.length)];
  const question2 = args.join(' ');
  if (!question2) {
    return message.reply("You must state a valid question. *Example Usage: a!8ball is this a test?*\n**Note: You must have a __?__ at the end.**")
  }
  const question = message.content.split(' ').slice(1).join(' ')
  if (!question) {
   return message.reply("That doesn't look like a question to me. Please don't forget to add a `?`. :eyes: *Smartass*")
  } 
  let Embed = new MessageEmbed()
          .setTitle(`:8ball: 8ball`)
          .setColor(randColor)
          .setDescription(`Your Question: ${question2}\nMy Reply: ${randMessage}` ) 
      message.channel.send(Embed);


    


}
