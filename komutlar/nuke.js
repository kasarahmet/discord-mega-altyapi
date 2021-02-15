const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('Dostum Bu komutu kullanabilmek için `Yönetici` iznine sahip olman lazım :('));
 message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
  message.channel.send("Başarıyla **Nuke Komudunu Kullandın https://i.gifer.com/7KEW.gif**")
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 5
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturur.',
  usage: 'nuke'
};