const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» GetSoul")
.setTitle("<a:maple_leaf:742698148329291826> » Sistemler <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<a:dizzy:750065080741134407> **g!otorol** = Sunucuna Gelenlere Otomatik Olarak Rol verir. <a:confetti_ball:749525084586115153> \n<a:dizzy:750065080741134407> **g!anti-raid-bot-sistemi** = Sunucuna Gelen Botları Direk Kickler. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407> **g!otorol2** = Sunucuna Gelenlere Otomatik Olarak 2. Bir Rol verir.<a:confetti_ball:749525084586115153>")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'sistemler',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-eğlence'
}