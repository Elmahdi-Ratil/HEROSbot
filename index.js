const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

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


اللحية.login(process.env.BOT_TOKEN);
