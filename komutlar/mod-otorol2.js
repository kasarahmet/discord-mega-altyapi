const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  if(!rol) return message.channel.send(`Verilecek Rolü Belirtmelisiniz.Örnek Kullanım : g!otorol @üye #otorol`)
  if(!kanal) return message.channel.send(`Kanal Belirtmelisiniz.Örnek Kullanım : g!otorol @üye #otorol`)
  
  db.set(`otorol2_${message.guild.id}`, rol.id)
  db.set(`otorolkanal2_${message.guild.id}` ,kanal.id)
  message.channel.send(`Başarılı , Otorol ${rol} Otorol Kanalı ${kanal} Olarak Ayarlandı`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otomatik-rol2'],
    permLevel: 0
};
exports.help = {
    name: 'otorol2',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'otorol <@rol> <#kanal>'
}