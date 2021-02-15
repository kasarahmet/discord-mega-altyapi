  
const Discord = require('discord.js');

exports.run = (client, message, args) => {
   if(!message.member.hasPermission("ADMINISISTOR")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Duyuru Metnini Giriniz.');
  message.delete();
const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(mesaj)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: '',
  usage: ''
};