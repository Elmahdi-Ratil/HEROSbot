const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'




client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);
    client.user.setGame('Mido King');
});



client.on('voiceStateUpdate', (o, n) => {
        let newUserChannel = n.voiceChannel
    let oldUserChannel = o.voiceChannel

    var channel = client.channels.get("462302884155883520");
        let oldUserChannel = o.voiceChannel.get("462302960052076564");
        
          let mute1 = o.serverMute;
  let mute2 = n.serverMute;
  

  let deafen1 = o.serverDeaf;
  let deafen2 = n.serverDeaf;

    if(mute1 === false && mute2 === true) return;
    if(mute1 === true && mute2 === false) return;
    if(deafen1 === false && deafen2 === true) return;
    if(deafen1 === true && deafen2 === false) return;
    

    channel.send(`Join Room ${n.displayName}`)

});




client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** I Dont Have Permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log','time');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** Does No Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You Need To Mention Member First**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Use:', 'Talk/Shut Up')
    .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Dont have  Permission Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. Member Was Muted**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. Member Was Muted**").catch(console.error);
});
  }

};

});




client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** I Dont Have Permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** Does No Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You Need To Mention Member First**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Use:', 'Talk/Shut Up')
    .addField('UnMuted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You Dont have  Permission Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. Member Was UnMuted **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. Member Was UnMuted **").catch(console.error);
});
  }

};

});




client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** no advs last chance ! **`)
    }
});




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-my-dear');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | Norther server oh my heart' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('| You are the member number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                    .addField(' server', `${member.guild.name}`,true)
                                       
     .setFooter("**THE ATLANTIC**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });




client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });






client.login(process.env.BOT_TOKEN);
