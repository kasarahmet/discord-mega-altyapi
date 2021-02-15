const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RED")
   .addField("**Toplam Kullanıcı 👨‍👨‍👦‍👦**",message.guild.memberCount )
    .addField("**Çevrimiçi Kullanıcılar 🟢**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField("**Boşta Kullanıcılar 🌙**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
.addField("**Rahatsız Etmeyindeki Kullanıcılar 🔴**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
.addField("**Çevrimdışı Kullanıcılar ⚫**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
