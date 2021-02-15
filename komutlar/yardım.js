const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("#310000")
    .setTitle(
      "**●▬▬▬๑-**  **» GetSoul Bot**  **-๑▬▬▬●**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/781983583724240907/783407146166517770/standard_18.gif"
    )

.setImage("https://media1.tenor.com/images/8f01f2d53cd0529fcb49a2fbcb9f9d0f/tenor.gif")
    .setDescription(
      `

**●▬▬๑-**  <a:renkliraptiye:788274658767405087> ▬ **Komut Listesi** ▬  <a:renkliraptiye:788274658767405087> **-๑▬▬●**

> ** <a:baglaniliyor:788274616145149963> » g!moderasyon :** Moderasyon komutları görüntüler.
> ** <a:baglaniliyor:788274616145149963> » g!sistemler :**Sistemleri gösterir
> ** <a:baglaniliyor:788274616145149963> » g!kullanıcı :** Userler için açık komutlar...
> ** <a:baglaniliyor:788274616145149963> » g!eğlence :** Sizi biraz eğlendirir.
> ** <a:baglaniliyor:788274616145149963> » g!eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> ** <a:baglaniliyor:788274616145149963> » g!logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> ** <a:baglaniliyor:788274616145149963> » g!logo2 :**logo2 kamutlarıyla sizlerle...

**●▬▬๑-** <a:Setting:781114694382387201>  **Bilgilendirme**  <a:Setting:781114694382387201> **-๑▬▬●**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/ECv2kaNpHC)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: g!yardım**
> <a:JS:788659507017285632> **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ECv2kaNpHC)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=759022724500291634&scope=bot&permissions=8)**
Prefixim: "g!"`
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
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "g!yardım"
};
