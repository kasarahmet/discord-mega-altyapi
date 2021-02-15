const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://ntmaker.gfto.ru/newneontexten/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=80&image_background_color=111111&image_text_color=1AFF00&image_font_shadow_color=144A00&image_url=&image_text="+ isim +"&image_font_family=HACKED&%22.gif"
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'glitch-logo',
  description: 'Logo Yaparsınız',
  usage: ''
};