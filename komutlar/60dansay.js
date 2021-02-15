const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setImage("https://100numaraliadam.com/wp-content/uploads/2018/04/gerisayim.gif")
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
  name: 'say60',
  description: 'Logo Yaparsınız',
  usage: 'g!say60'
};
