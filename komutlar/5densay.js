const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setImage("https://thumbs.gfycat.com/IgnorantLeadingAsiaticlesserfreshwaterclam-size_restricted.gif")
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'say5',
  description: 'Logo Yaparsınız',
  usage: 'g!say5'
};
