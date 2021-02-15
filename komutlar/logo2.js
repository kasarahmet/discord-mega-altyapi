const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» CAPTAN v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826> » CAPTAN Logo Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<a:fast_forward:750065080741134407> **g!kalp** = kalp logo oluşturur. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **g!3d** = 3 boyutlu logo oluşturur \n <a:fast_forward:750065080741134407> **g!anime** = Anime Font İle Logo Oluşturur <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **g!bayrak** = Bayrak Fontuyla logo oluşturur <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **g!bilim-kurgu** = Bilim Kurgu Fontuyla Logo Yapar. <a:warning:749525084586115153> \n <a:fast_forward:750065080741134407> **g!bitiş-çizgisi**")
message.channel.send(eğlence)
}

exports.conf = {  
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-logo2'
}