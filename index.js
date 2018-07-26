const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام');
  }
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

// جميع حقوق هذا الملف محفوظة ,
client.login(process.env.BOT_TOKEN);


   


