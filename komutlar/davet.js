const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/781983583724240907/784010207864946688/standard_21.gif")
    .setColor("#310000")
    .setTitle(
      "**●▬▬๑-**  **DAVET!**  **-๑▬▬●**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/781983583724240907/783407146166517770/standard_18.gif"
    )
    .setDescription(
      `
**» Bağlantılar** 

**[Destek Sunucusu](https://discord.gg/ECv2kaNpHC)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=759022724500291634&scope=bot&permissions=8)**

**Prefixim: "g!"**`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();
  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Botun Komut Listesini Gösterir!",
  usage: "g!yardım"
};
