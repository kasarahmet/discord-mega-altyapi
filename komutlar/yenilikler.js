const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
      const yenilik = new Discord.MessageEmbed()
    .setTitle(
      "**●▬▬▬๑-**  **Yenilikler**  **-๑▬▬▬●**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/781983583724240907/783407146166517770/standard_18.gif"
    )
    .setColor("#350000")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(' ``` ``` \n **Yenilikler:** \n**1** **g!rol-ver** komutu ve **g!rol-al** komutu eklendi \n**2** Yeni Logo Komutları Eklendi **g!logo** \n**3** **@etiket** = prefix eklendi! \n \n ``` ```')
    .setFooter('Yenilikler - GetSoul');
    return message.channel.send(yenilik).then
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenilik"],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilikleri gösterir.',
  usage: 'yenilikler'
};