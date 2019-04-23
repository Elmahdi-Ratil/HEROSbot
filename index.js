
const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();



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
