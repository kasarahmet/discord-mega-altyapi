const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» GetSoul")
.setTitle("<a:maple_leaf:742698148329291826> » GetSoul Eğlence Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<a:dizzy:750065080741134407> **g!yazan-kazanır** =  Yazan karanır oyununu oynadıktan sonra tekrar oynamaya ne dersin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **g!kapaklaf** =  Birine güzel bi söz sözlemeye ne dersin?. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **g!kralol** =  Kral olmaya ne dersin?. <a:confetti_ball:749525084586115153> \n")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-eğlence'
}