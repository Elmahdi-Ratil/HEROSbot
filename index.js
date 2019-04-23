
const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
client.on('ready', () => {
     client.user.setActivity("bot",{type: 'WATCHING'})

});

client.on('message', message => {
    if(message.content.includes('discord.gg')){     
                                            if(!message.channel.guild) return message.reply('');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** يمنع نشر الروابط في هاذا السيرفر:angry: ! **`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('youtube.com')){     
                                            if(!message.channel.guild) return message.reply('');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** يمنع نشر الروابط في هاذا السيرفر:angry: ! **`)
    }
}
});

client.on('message', message => {
    if (message.content.startsWith("server")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});


client.on('message', async message => {
  if(message.content.startsWith("voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: ليس لديك الصلاحيات الكافية');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: ليس معي الصلاحيات الكافية');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. يجب عليك كتابة 0 في اسم الروم');
  if(!args) args = VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ];
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

client.login(process.env.BOT_TOKEN);
