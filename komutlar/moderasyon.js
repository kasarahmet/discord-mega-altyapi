const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» GetSoul v12 sürümüyle sizlerle.")
.setTitle("<a:maple_leaf:742698148329291826>» GetSoul Moderasyon Komutları <a:maple_leaf:742698148329291826>")
.setDescription("<a:baglaniliyor:788274616145149963> **g!taç** = Sunucunun sahibini gösterir. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!up** = Botunuzun 7/24 yapmak için gerekli bilgi... <a:baglaniliyor:788274616145149963>\n <a:baglaniliyor:788274616145149963> **g!sil** = Yazdığınız miktarda mesajı siler. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!ban** = Etiketlediğiniz kişiyi banlarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!kick** = Etiketlediğiniz kişiyi atarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!duyuru** = Bota duyuru yaptırırsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!küfür** = Küfür engel sistemini açarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!reklam** = Reklam engel sistemi açarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!slowmode** = Yavaş modu ayarlarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!forceban** = Birisine id ban atarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!unban** = Birisinin banını açarsınız. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!sa-as** = Bot biri sa dedimi cevap verir. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!sunucubilgi** = Sunucu bilgilerini görürsün. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!üyedurum** = Üyelerin durumlarını görürsün. <a:baglaniliyor:788274616145149963> \n <a:baglaniliyor:788274616145149963> **g!çekiliş** = Çekiliş başlatırsınız. <a:baglaniliyor:788274616145149963>")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-moderasyon'
}