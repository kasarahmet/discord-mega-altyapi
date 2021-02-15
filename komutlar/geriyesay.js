const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("#310000")
    .setTitle(
      "**●▬▬▬๑-**  ** GetSoul Bot**  **-๑▬▬▬●**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/781983583724240907/783407146166517770/standard_18.gif"
    )
    .setDescription(
      `
``` ```
**●▬▬๑-**  <a:renkliraptiye:788274658767405087> ▬ **Geriye Sayma** ▬  <a:renkliraptiye:788274658767405087> **-๑▬▬●**

> ** <a:baglaniliyor:788274616145149963> » g!say5 :** 5 den geriye sayar..
> ** <a:baglaniliyor:788274616145149963> » g!say10 :** 10 dan geriye sayar..
> ** <a:baglaniliyor:788274616145149963> » g!say60:** 60 dan geriye sayar..

**●▬▬๑-** <a:Setting:781114694382387201>  **Bilgilendirme**  <a:Setting:781114694382387201> **-๑▬▬●**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/ECv2kaNpHC)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: g!yardım**
> **</>** **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ECv2kaNpHC)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=759022724500291634&scope=bot&permissions=8)**
Prefixim: **g!**`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();
  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["geriye-say","gerisay","geriyesay"],
  permLevel: 7
};

exports.help = {
  name: "geri-say",
  description: "Botun Komut Listesini Gösterir!",
  usage: "g!geri-say"
};
