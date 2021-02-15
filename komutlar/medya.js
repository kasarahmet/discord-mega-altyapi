const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('Sosyal medyalar')
  .setDescription("Daha Sosyal Medya Hesaplarımız Açılmadı")
 .addField('``GetSoul``')  
message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'medya',
  description: '',
  usage: ''
};