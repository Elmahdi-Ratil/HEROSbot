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
     client.user.setActivity("+help",{type: 'WATCHING'})

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


client.login(process.env.BOT_TOKEN);


   


