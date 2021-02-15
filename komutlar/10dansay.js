const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setImage("https://64.media.tumblr.com/7f714c6a8dba3f23b93d95bea399d0c5/tumblr_inline_p8hesw2jJK1sa35ci_400.gif")
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
  name: 'say10',
  description: 'Logo Yaparsınız',
  usage: 'g!say10'
};
