const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

const muteRoleFetch = await database.fetch(`carl-mute-role.${message.guild.id}`);
if(!muteRoleFetch) return message.channel.send('Bu Server Bir Mute Rolü İçermiyor.`g!muterole` u kullanıp varolan bir rolü mute rolü olarak ayarlayabilirsin veya `g!muterole create [RolIsmi]` Kullanarak Otomatik bir Mute rolü oluşturabilirsin.');

if(!args[0]) return message.channel.send(`\`\`\`${message.content.split('unmute')[0]}unmute  [reason]
      ^^^^^^^^
member is a required argument that is missing.\`\`\``);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(`Üye "${args[0]}" Bulunamadı`);
member.roles.remove(muteRoleFetch).then(() => {
return message.channel.send('Başarıyla Susturulması Açıldı **'+member.user.tag+'**');
})
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unmute'
};// codare ♥